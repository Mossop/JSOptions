cd chrome
find * | grep -v \\.svn | zip -u@0 jsoptions.jar
cd ..
find * | grep -v "^chrome/" | grep -v \\.svn | grep -v build.sh | zip -u@9 jsoptions.xpi
zip -u9 jsoptions.xpi chrome/jsoptions.jar
