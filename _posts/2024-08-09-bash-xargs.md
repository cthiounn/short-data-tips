---
layout: post
cover: /media/shell.PNG
title: "shell/bash : xargs command"
categories: shell
author:
  - cthiounn
---

I often perform operations on several files with a shell, such as filtering/searching a pattern with `grep`, and then I want to perform an action on the previous result, such as moving or deleting these files. You can follow up with the xargs command, which takes the previous output as input. I don't use it as often I should be, hence this post

*Je fais souvent des opérations sur plusieurs fichiers avec un shell, comme filtrer/rechercher un pattern avec `grep`, puis je souhaite faire une action sur le résultat précédent, comme déplacer ou supprimer ces fichiers. Vous pouvez enchaîner en utilisant la commande xargs qui reprend la sortie précédente comme une entrée. Je ne l'utilise pas aussi souvent que je le devrais, d'où ce billet.*

```
grep -rl "mon motif" * | xargs rm
```


```
mc ls s3/mon_bucket/ | cut -d "" -f5 | xargs -I {} mc rm s3/mon_bucket/{}
```

* the -I {} argument is used to capture the variable for reuse in the rest of the command with {}
*l'argument -I {} permet de capturer la variable pour la réutiliser dans la suite de la commande avec {}* 