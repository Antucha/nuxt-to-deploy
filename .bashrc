$ echo "SSH_ENV=$HOME/.ssh/environment" >> ~/.bashrc
$ echo "" >> ~/.bashrc
$ echo "# start the ssh-agent" >> ~/.bashrc
$ echo "function start_agent {" >> ~/.bashrc
$ echo "    echo \"Initializing new SSH agent...\"" >> ~/.bashrc
$ echo "    # spawn ssh-agent" >> ~/.bashrc
$ echo "    /usr/bin/ssh-agent | sed 's/^echo/#echo/' > \"\${SSH_ENV}\"" >> ~/.bashrc
$ echo "    echo succeeded" >> ~/.bashrc
$ echo "    chmod 600 \"\${SSH_ENV}\"" >> ~/.bashrc
$ echo "    . \"\${SSH_ENV}\" > /dev/null" >> ~/.bashrc
$ echo "    /usr/bin/ssh-add" >> ~/.bashrc
$ echo "}" >> ~/.bashrc
$ echo "" >> ~/.bashrc
$ echo "if [ -f \"\${SSH_ENV}\" ]; then" >> ~/.bashrc
$ echo "     . \"\${SSH_ENV}\" > /dev/null" >> ~/.bashrc
$ echo "     ps -ef | grep \${SSH_AGENT_PID} | grep ssh-agent$ > /dev/null || {" >> ~/.bashrc
$ echo "        start_agent;" >> ~/.bashrc
$ echo "    }" >> ~/.bashrc
$ echo "else" >> ~/.bashrc
$ echo "    start_agent;" >> ~/.bashrc
$ echo "fi" >> ~/.bashrc
