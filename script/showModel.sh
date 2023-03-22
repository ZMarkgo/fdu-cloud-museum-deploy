#! /bin/bash

# 定义处理 SIGTERM 信号的函数
function on_sigterm() {
    kill $trainPID
    exit 0
}

# 注册 SIGTERM 信号处理函数
trap on_sigterm SIGTERM

# 获取脚本运行的路径
DIRNAME=$0
if [ "${DIRNAME:0:1}" = "/" ];then
    CURDIR=`dirname $DIRNAME`
else
    CURDIR="`pwd`"/"`dirname $DIRNAME`"
fi
# 设置日志路径
logPath="/home/david/develop/fdu-cloud-museum/fdu-cloud-museum-deploy/log/show_model_sh.out"

work_dir="/home/david/develop/mynerfstudio"
# ns-train的训练参数
data_path=$1 # "data/6"
load_dir=$2  # "outputs/6/nerfacto/2023-03-17_233144/nerfstudio_models"

conda activate nerfstudio

cd ${work_dir}
nohup ns-train nerfacto \
--data ${data_path} \
--load-dir ${load_dir} \
--viewer.start-train False \
--pipeline.model.predict-normals True \
> ${logPath} 2>&1 &

# $! 获取到最后一个在后台执行的进程ID
# $pid 保存该进程ID
# 使用 wait 命令等待该进程执行完毕
trainPID=$!
wait $trainPID
