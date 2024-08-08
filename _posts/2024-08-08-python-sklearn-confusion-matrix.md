---
layout: post
cover: /media/cm.png
title: "Python/sklearn : Confusion matrix"
categories: python
author:
  - cthiounn
---

Reminder for me:
*Pense-bête*

```
import numpy as np
from sklearn.metrics import confusion_matrix

y_true = [0, 1, 2, 2, 0, 1]
y_pred = [0, 2, 1, 2, 0, 2]

cm = confusion_matrix(y_true, y_pred)
print(cm)
```

```
import seaborn as sns
import matplotlib.pyplot as plt

sns.heatmap(cm, annot=True, fmt='d', cmap='Blues', xticklabels=np.unique(y_true), yticklabels=np.unique(y_true))
plt.xlabel('Predicted')
plt.ylabel('True')
plt.show()
```

```
from sklearn.metrics import accuracy_score, precision_score, recall_score, f1_score, classification_report

accuracy = accuracy_score(y_true, y_pred)
precision = precision_score(y_true, y_pred, average='macro')
recall = recall_score(y_true, y_pred, average='macro')
f1 = f1_score(y_true, y_pred, average='macro')
report = classification_report(y_true, y_pred)

print(f'Accuracy: {accuracy}')
print(f'Precision (macro): {precision}')
print(f'Recall (macro): {recall}')
print(f'F1 Score (macro): {f1}')
print("-"*10)
print('Classification Report:')
print(report)
```
