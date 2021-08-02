模型名：
imagenet-vgg-verydeep-19.mat

模型下载地址：  
https://www.vlfeat.org/matconvnet/pretrained/

模型介绍：
https://windmissing.github.io/DeepLearningNotes/CaseStudy/ClassicNetwork.html

模型结构：

|维度|含义|值|
|---|---|---|
|0||'layers'|
|1||0|
|2|层索引|[0, 42]|
|3||0|
|4||0|
|5|信息分类|0：name 2：参数|
|6||0|第5维是0时，这里填0，取到layername
|7|参数|第5维是2时，0：W, 1:b。第5维是0时，这里是0|

```python
W = vgg['layers'][0][layer][0][0][2][0][0]
b = vgg['layers'][0][layer][0][0][2][0][1]
layername = vgg['layers'][0][layer][0][0][0][0]
```

加载模型

```python
class ModelLoader():
    def __init__(self, path):
        vgg = scipy.io.loadmat(path)
        self.vgg_layers = vgg['layers']
        self.layerlist = self._create_layer_list()
        tf.keras.backend.set_floatx('float64')
    
    def _weights(self, layer, expected_layer_name):
        """
        Return the weights and bias from the VGG model for a given layer.
        """
        wb = self.vgg_layers[0][layer][0][0][2]
        W = wb[0][0]
        b = wb[0][1]
        layer_name = self.vgg_layers[0][layer][0][0][0][0]
        assert layer_name == expected_layer_name
        return W, b
    
    def _conv2d_relu(self, layer, layer_name, input_shape=None):
        """
        Return the Conv2D layer using the weights, biases from the VGG
        model at 'layer'.
        """
        W, b = self._weights(layer, layer_name)
        W = tf.cast(tf.constant(W),dtype=tf.float64)
        b = tf.cast(tf.constant(np.reshape(b, (b.size))),dtype=tf.float64)
        if input_shape:
            return tf.keras.layers.Conv2D(filters=(W.shape[3]), kernel_size=(W.shape[0], W.shape[1]),
                                          padding='SAME', kernel_initializer=ExampleRandomNormal(W),
                                          bias_initializer=ExampleRandomNormal(b), activation='relu',
                                          input_shape=input_shape)
        else:
            return tf.keras.layers.Conv2D(filters=(W.shape[3]), kernel_size=(W.shape[0], W.shape[1]),
                                          padding='SAME', kernel_initializer=ExampleRandomNormal(W),
                                          bias_initializer=ExampleRandomNormal(b),activation='relu')
    def _avgpool(self):
        """
        Return the AveragePooling layer.
        """
        return tf.keras.layers.AveragePooling2D(padding='same')

    def _create_layer_list(self):
        return [self._conv2d_relu(0, 'conv1_1', input_shape=(CONFIG.IMAGE_HEIGHT, CONFIG.IMAGE_WIDTH, CONFIG.COLOR_CHANNELS)),
        self._conv2d_relu(2, 'conv1_2'),
        self._avgpool(),
        self._conv2d_relu(5, 'conv2_1'),
        self._conv2d_relu(7, 'conv2_2'),
        self._avgpool(),
        self._conv2d_relu(10, 'conv3_1'),
        self._conv2d_relu(12, 'conv3_2'),
        self._conv2d_relu(14, 'conv3_3'),
        self._conv2d_relu(16, 'conv3_4'),
        self._avgpool(),
        self._conv2d_relu(19, 'conv4_1'),
        self._conv2d_relu(21, 'conv4_2'),
        self._conv2d_relu(23, 'conv4_3'),
        self._conv2d_relu(25, 'conv4_4'),
        self._avgpool(),
        self._conv2d_relu(28, 'conv5_1'),
        self._conv2d_relu(30, 'conv5_2'),
        self._conv2d_relu(32, 'conv5_3'),
        self._conv2d_relu(34, 'conv5_4'),
        self._avgpool()]
    
    def _create_model_with_part_layer(self, num=-1):
        model = tf.keras.Sequential(self.layerlist[:num])
        return model

def test_get_model_weight():
    # W, b = load_vgg_model("pretrained-model/imagenet-vgg-verydeep-19.mat")._weights(0, 'conv1_1')
    vgg = scipy.io.loadmat("../pretrained-model/imagenet-vgg-verydeep-19.mat")
    assert 'layers' in vgg.keys()
    assert len(vgg['layers']) == 1
    assert len(vgg['layers'][0]) == 43
    layer = 0
    name = 'conv1_1'
    type = 'conv'
    assert len(vgg['layers'][0][layer]) == 1
    assert len(vgg['layers'][0][layer][0]) == 1
    assert len(vgg['layers'][0][layer][0][0]) == 9
    assert vgg['layers'][0][layer][0][0][0][0] == name
    assert vgg['layers'][0][layer][0][0][1][0] == type
    W = vgg['layers'][0][layer][0][0][3][0]
    assert len(vgg['layers'][0][layer][0][0][2]) == 1
    assert len(vgg['layers'][0][layer][0][0][2][0]) == 2
    assert (vgg['layers'][0][layer][0][0][2][0][0]).shape == tuple(W) # weights of filter
    assert (vgg['layers'][0][layer][0][0][2][0][1]).shape == (W[3], 1) # bias
    assert len(vgg['layers'][0][layer][0][0][4][0]) == 4 # stride

def test_model_loader_weight():
    loader = ModelLoader("../pretrained-model/imagenet-vgg-verydeep-19.mat")
    W, b = loader._weights(0, "conv1_1")
    assert W.shape == (3,3,3,64)
    assert b.shape == (64, 1)

def test_model_loader_layer():
    loader = ModelLoader("../pretrained-model/imagenet-vgg-verydeep-19.mat")
    layer = loader._conv2d_relu(0, "conv1_1")

def test_model_loader_create_layers():
    loader = ModelLoader("../pretrained-model/imagenet-vgg-verydeep-19.mat")
    layerlist = loader._create_layer_list()
    assert len(layerlist) == 21

def test_create_model_with_part_layer():
    loader = ModelLoader("../pretrained-model/imagenet-vgg-verydeep-19.mat")
    model = loader._create_model_with_part_layer(5)

    
if __name__ == '__main__':
    print ("model loader test begin")
    test_get_model_weight()
    test_model_loader_weight()
    test_model_loader_layer()
    test_model_loader_create_layers()
    test_create_model_with_part_layer()
    print ("model loader test passed")
```