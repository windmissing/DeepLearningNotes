通常使用librosa做音频的预处理。  

（1） 读入音频文件  

```python
sig, rate = librosa.load(path, sr=32000, offset=None)
```

path:  文件路径  
sr：采样率  
sig：此时的数据为一维的序列。  

（2）用FFT变换，将序列转换为声谱图

```python
# Compute the spectrogram and apply the mel scale
mel_spec = librosa.feature.melspectrogram(y=y, 
                                        sr=32000, 
                                        n_fft=1024, 
                                        hop_length=HOP_LENGTH, 
                                        n_mels=NUM_MELS, 
                                        fmin=FMIN, 
                                        fmax=FMAX)
```

mel_spec：二维声谱图像  
输出长度= （秒）*（采样率）/（hop_length）
输出高度= n_mels

（3）归一化：  

```python
mel_spec_db = librosa.power_to_db(mel_spec, ref=np.max)
```

或

```python
mel_spec_db -= mel_spec_db.min()
mel_spec_db /= mel_spec_db.max()
```

（4）升维

```python
mel_spec_db = mel_spec_db[np.newaxis,:,:,np.newaxis]
```

转换为二维单通道的图像，用图像方式来处理

-------

```python
def get_segment_spec(path, second):
    sig, rate = librosa.load(path, sr=32000, offset=None)
    s_start = (second - 5) * 32000
    s_end = second * 32000
    y = sig[s_start:s_end]
    if y.shape[0] < 1:
        return None
    # Compute the spectrogram and apply the mel scale
    mel_spec = librosa.feature.melspectrogram(y=y, 
                                          sr=32000, 
                                          n_fft=1024, 
                                          hop_length=HOP_LENGTH, 
                                          n_mels=NUM_MELS, 
                                          fmin=FMIN, 
                                          fmax=FMAX)

    
    mel_spec_db = np.array(mel_spec_db)
    mel_spec_db = librosa.power_to_db(mel_spec, ref=np.max)
    #mel_spec_db -= mel_spec_db.min()
    #mel_spec_db /= mel_spec_db.max()
    mel_spec_db = mel_spec_db[np.newaxis,:,:,np.newaxis]
    # print ("mel_spec_db.shape", mel_spec_db.shape)
    return mel_spec_db
```