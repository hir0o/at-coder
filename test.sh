DIR=${INIT_CWD:=$(pwd)}

oj t -c "ts-node $DIR/main.ts" -d $DIR/tests
