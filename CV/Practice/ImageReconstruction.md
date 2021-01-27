1. 加载预预训练模型，以VGG19为例，见上一页。  

2. 生成一张白噪声图像

3. 定义原图像为a，生成的图像为g，它们经过预训练模型后，第l层的输出为F(a, l)和F(g, l)。  

4. 定义损失函数为：  

L = |F(a, l) - F(g, l)|_2把模型参数作为常量，把图像像素作为变量，进行梯度下降的迭代  

5. 最后得到的g为基于预训练模型第l层得到的重构图像  

结论：  
l层越低（靠近输入层），还原度越高，画面越精细。  


```python
from utils import load_vgg_model
import imageio
import tensorflow as tf

CONTENT_IMAGE = "images/content_wind_400300.jpg"
INIT_GENERATE = CONTENT_IMAGE
CONTENT_LAYER = 4

def calculate_a_C(model, layer_id):
    content_image = imageio.imread(CONTENT_IMAGE)
    content_image = load_vgg_model.reshape_and_normalize_image(content_image)
    a_C = model(content_image)
    return a_C

def read_init_generate(content = "copy"):
    if content == "copy":
        generated_image = imageio.imread(INIT_GENERATE)
        generated_image = load_vgg_model.reshape_and_normalize_image(generated_image)
    else:
        image = imageio.imread(INIT_GENERATE)
        generated_image = load_vgg_model.generate_noise_image(image)
    generated_image = tf.Variable(initial_value=generated_image, dtype=tf.float64)
    return generated_image

def processing(input_image):
    a_G = content_model(input_image)
    # Compute the content cost
    J = compute_content_cost(a_C, a_G)
    print ("cost = ", J)
    return J

def compute_content_cost(a_C, a_G):
    """
    Computes the content cost

    Arguments:
    a_C -- tensor of dimension (1, n_H, n_W, n_C), hidden layer activations representing content of the image C
    a_G -- tensor of dimension (1, n_H, n_W, n_C), hidden layer activations representing content of the image G

    Returns:
    J_content -- scalar that you compute using equation 1 above.
    """

    ### START CODE HERE ###
    m, n_H, n_W, n_C = tf.shape(a_G)

    # Reshape a_C and a_G (≈2 lines)
    a_C_unrolled = tf.reshape(a_C, shape=[m, n_H * n_W, n_C])
    a_G_unrolled = tf.reshape(a_G, shape=[m, n_H * n_W, n_C])

    # compute the cost with tensorflow (≈1 line)
    J_content = (tf.reduce_sum(tf.square(tf.subtract(a_C_unrolled, a_G_unrolled)))) / tf.cast((4 * n_H * n_W * n_C), tf.float32)
    ### END CODE HERE ###

    return J_content

def model_nn(input_image, num_iterations=200):
    for i in range(num_iterations):
        print ('interation: %d', i)
        with tf.GradientTape(watch_accessed_variables=False) as tape:
            tape.watch(input_image)
            J = processing(input_image)
            # save last generated image
        gradients = tape.gradient(J, input_image)
        optimizer = tf.keras.optimizers.Adam(2.0)
        optimizer.apply_gradients([(gradients, input_image)])
        # load_vgg_model.save_image('output/generated_image_' + str(i) + '.jpg', input_image)
    load_vgg_model.save_image('output/generated_image_' + str(i) + '.jpg', input_image)
    return generated_image

tf.enable_eager_execution()
loader = load_vgg_model.ModelLoader("pretrained-model/imagenet-vgg-verydeep-19.mat")
content_model = loader._create_model_with_part_layer(CONTENT_LAYER)
a_C = calculate_a_C(content_model, layer_id=-1) # 'conv4_2' #浣犳兂瑕佽幏寰楄緭鍑虹殑鍘熷妯″瀷涓偅涓€灞傜殑鍚嶇О
generated_image = read_init_generate(content="noise")
model_nn(generated_image)
```