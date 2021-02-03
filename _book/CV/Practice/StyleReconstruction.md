风格重构又称为纹理提取，过程与内容重构类似，区别只是损失函数的计算方法不同。  

1. 加载预预训练模型，以VGG19为例，见上一页。  

2. 生成一张白噪声图像

3. 定义原图像为a，生成的图像为g，它们经过预训练模型后，第l层的输出为F(a, l)和F(g, l)。  

4. 定义任意图像p的风格为gram矩阵

$G^l_{ij} = \text{correlation}(p^l_i, p^l_j)$

5. 定义损失函数 

$L = |G(a, l) - G(g, l)|_2$把模型参数作为常量，把图像像素作为变量，进行梯度下降的迭代  

5. 最后得到的g为基于预训练模型第l层得到的重构图像  

结论：  
l层越高（靠近输出层），像素越连续。  


```python
import tensorflow as tf

# GRADED FUNCTION: gram_matrix

def gram_matrix(A):
    """
    Argument:
    A -- matrix of shape (n_C, n_H*n_W)

    Returns:
    GA -- Gram matrix of A, of shape (n_C, n_C)
    """

    ### START CODE HERE ### (鈮? line)
    GA = tf.matmul(A, tf.transpose(A))
    ### END CODE HERE ###

    return GA


# GRADED FUNCTION: compute_layer_style_cost

def compute_layer_style_cost(a_S, a_G):
    """
    Arguments:
    a_S -- tensor of dimension (1, n_H, n_W, n_C), hidden layer activations representing style of the image S
    a_G -- tensor of dimension (1, n_H, n_W, n_C), hidden layer activations representing style of the image G

    Returns:
    J_style_layer -- tensor representing a scalar value, style cost defined above by equation (2)
    """

    ### START CODE HERE ###
    # Retrieve dimensions from a_G (鈮? line)
    # m, n_H, n_W, n_C = a_G.get_shape().as_list()
    m, n_H, n_W, n_C = tf.shape(a_G)

    # Reshape the images to have them of shape (n_C, n_H*n_W) (鈮? lines)
    a_S = tf.transpose(tf.reshape(a_S, shape=[n_H * n_W, n_C]))
    a_G = tf.transpose(tf.reshape(a_G, shape=[n_H * n_W, n_C]))

    # Computing gram_matrices for both images S and G (鈮? lines)
    GS = gram_matrix(a_S)
    GG = gram_matrix(a_G)

    # Computing the loss (鈮? line)
    J_style_layer = (tf.reduce_sum(tf.square(tf.subtract(GS, GG)))) / (tf.cast((4 * n_H * n_W * n_C), tf.float64) ** 2)

    ### END CODE HERE ###

    return J_style_layer


def compute_style_cost(modellist, STYLE_LAYERS, a_S_Set, generated_image):
    """
    Computes the overall style cost from several chosen layers

    Arguments:
    model -- our tensorflow model
    STYLE_LAYERS -- A python list containing:
                        - the names of the layers we would like to extract style from
                        - a coefficient for each of them

    Returns:
    J_style -- tensor representing a scalar value, style cost defined above by equation (2)
    """

    # initialize the overall style cost
    J_style = 0
    for layer_name, coeff, layer_id in STYLE_LAYERS:
        a_G = modellist[layer_name](generated_image)
        a_S = a_S_Set[layer_name]
        J_style_layer = compute_layer_style_cost(a_S, a_G)
        J_style += coeff * J_style_layer

    return J_style

def test_gram_matrix():
    tf.compat.v1.reset_default_graph()

    with tf.compat.v1.Session() as test:
        tf.compat.v1.set_random_seed(1)
        A = tf.compat.v1.random_normal([3, 2 * 1], mean=1, stddev=4)
        GA = gram_matrix(A)

        print("GA = \n" + str(GA.eval()))

def test_compute_layer_style_cost():
    tf.compat.v1.reset_default_graph()

    with tf.compat.v1.Session() as test:
        tf.compat.v1.set_random_seed(1)
        a_S = tf.compat.v1.random_normal([1, 4, 4, 3], mean=1, stddev=4)
        a_G = tf.compat.v1.random_normal([1, 4, 4, 3], mean=1, stddev=4)
        J_style_layer = compute_layer_style_cost(a_S, a_G)

        print("J_style_layer = " + str(J_style_layer.eval()))
        # J_style_layer = 9.190278

```