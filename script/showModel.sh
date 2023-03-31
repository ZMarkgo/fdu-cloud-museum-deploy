#!/usr/bin/env zsh

# 定义处理 SIGTERM 信号的函数
function on_sigterm() {
    kill $trainPID
    exit 0
}

# 注册 SIGTERM 信号处理函数
trap on_sigterm SIGTERM

# 设置日志路径
logPath="/home/david/develop/fdu-cloud-museum/fdu-cloud-museum-deploy/log/show_model_sh.out"
# 设置工作目录
work_dir="/home/david/develop/mynerfstudio"
# ns-train的训练参数
data_path=$1 # "data/6"
load_dir=$2  # "outputs/6/nerfacto/2023-03-17_233144/nerfstudio_models"

# 获取输入参数：端口号
PORT="7007"

# 查找占用端口的进程ID
PID=$(lsof -t -i:$PORT)

if [[ -z $PID ]]; then
  echo "端口 $PORT 没有被占用"
else
  # 结束占用端口的进程
  kill -9 $PID
  echo "成功杀死进程 $PID，释放端口 $PORT"
fi

cd ${work_dir}
source activate
conda activate nerfstudio
echo $?
nohup ns-train nerfacto \
--data ${data_path} \
--load-dir ${load_dir} \
--viewer.start-train False \
> ${logPath} 2>&1 &

# $! 获取到最后一个在后台执行的进程ID
# $pid 保存该进程ID
# 使用 wait 命令等待该进程执行完毕
trainPID=$!
wait $trainPID
