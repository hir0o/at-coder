#!/bin/bash
ACCDIR=`acc config-dir`
DIR=`pwd`

for f in *
do
  [ "$f" = "deploy.sh" ] && continue
  if [ -f $f ] ; then
    ln -snfv "$DIR/$f" "$ACCDIR"/"$f"
  elif [ -d $f ] ; then
    for ff in `ls "$f/"`
    do
      mkdir -p "$ACCDIR/$f"
      ln -snfv "$DIR/$f/$ff" "$ACCDIR/$f/$ff"
    done
  fi
done
