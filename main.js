var io = java.io;
var lang = java.lang;
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
var strCls = lang.Class.forName("java.lang.String");
//CLASSLOADER AREA
/*Base 64 string of the DEX file*/
var dex = "";
var array = android.util.Base64.decode(dex, 0);
var fi = io.File(ctx.getFilesDir(), "mcping_libs.dex");
var fos;
try {
    fos = io.FileOutputStream(fi);
    fos.write(array);
} finally {
    if (fos) fos.close();
}
var dcodedir;
if (android.os.Build.VERSION.SDK_INT < 21) {
    dcodedir = ctx.getDir("optimizedDex", 0);/*Older Android(~4.4W)*/
} else {
    dcodedir = ctx.getCodeCacheDir();/*Newer Android(5.0~)*/
}
var constClasses = lang.reflect.Array.newInstance(lang.Class.forName("java.lang.Class"), 4);
constClasses[0] = constClasses[1] = constClasses[2] = strCls;
constClasses[3] = lang.Class.forName("java.lang.ClassLoader");
var argsObjects = lang.reflect.Array.newInstance(lang.Class.forName("java.lang.Object"), 4);
argsObjects[0] = fi.toString();
argsObjects[1] = dcodedir.toString();
argsObjects[2] = null;
argsObjects[3] = ctx.getClassLoader();
var dxc = lang.Class.forName("dalvik.system.DexClassLoader")
    .getConstructor(constClasses)
    .newInstance(argsObjects);