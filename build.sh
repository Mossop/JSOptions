cd chrome
rm -f jsoptions.jar
find * | grep -v \\.svn | zip -@9 jsoptions.jar
cd ..
rm -f jsoptions.xpi
find * | grep -v "^chrome" | grep -v \\.svn | grep -v build.sh | zip -@9 jsoptions.xpi
zip -9 jsoptions.xpi chrome/jsoptions.jar
rm -f chrome/jsoptions.jar
