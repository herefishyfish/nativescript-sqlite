@echo off
"C:\\Users\\Dylan\\AppData\\Local\\Android\\Sdk\\cmake\\3.18.1\\bin\\cmake.exe" ^
  "-HC:\\Users\\Dylan\\Code\\NativeScript\\nativescript-v8-module\\packages\\v8-module-cpp\\src-native\\android" ^
  "-DCMAKE_SYSTEM_NAME=Android" ^
  "-DCMAKE_EXPORT_COMPILE_COMMANDS=ON" ^
  "-DCMAKE_SYSTEM_VERSION=17" ^
  "-DANDROID_PLATFORM=android-17" ^
  "-DANDROID_ABI=x86_64" ^
  "-DCMAKE_ANDROID_ARCH_ABI=x86_64" ^
  "-DANDROID_NDK=C:\\Users\\Dylan\\AppData\\Local\\Android\\Sdk\\ndk\\21.4.7075529" ^
  "-DCMAKE_ANDROID_NDK=C:\\Users\\Dylan\\AppData\\Local\\Android\\Sdk\\ndk\\21.4.7075529" ^
  "-DCMAKE_TOOLCHAIN_FILE=C:\\Users\\Dylan\\AppData\\Local\\Android\\Sdk\\ndk\\21.4.7075529\\build\\cmake\\android.toolchain.cmake" ^
  "-DCMAKE_MAKE_PROGRAM=C:\\Users\\Dylan\\AppData\\Local\\Android\\Sdk\\cmake\\3.18.1\\bin\\ninja.exe" ^
  "-DCMAKE_CXX_FLAGS=-O2 -frtti -fexceptions -Wall -Wno-unused-variable -fstack-protector-all" ^
  "-DCMAKE_LIBRARY_OUTPUT_DIRECTORY=C:\\Users\\Dylan\\Code\\NativeScript\\nativescript-v8-module\\packages\\v8-module-cpp\\src-native\\android\\build\\intermediates\\cxx\\Debug\\5z2ah5i4\\obj\\x86_64" ^
  "-DCMAKE_RUNTIME_OUTPUT_DIRECTORY=C:\\Users\\Dylan\\Code\\NativeScript\\nativescript-v8-module\\packages\\v8-module-cpp\\src-native\\android\\build\\intermediates\\cxx\\Debug\\5z2ah5i4\\obj\\x86_64" ^
  "-DCMAKE_BUILD_TYPE=Debug" ^
  "-BC:\\Users\\Dylan\\Code\\NativeScript\\nativescript-v8-module\\packages\\v8-module-cpp\\src-native\\android\\.cxx\\Debug\\5z2ah5i4\\x86_64" ^
  -GNinja ^
  "-DANDROID_TOOLCHAIN=clang" ^
  "-DANDROID_STL=c++_shared" ^
  "-DNATIVESCRIPT_SO_PATH=C:\\Users\\Dylan\\Code\\NativeScript\\nativescript-v8-module\\packages\\v8-module-cpp\\src-native\\android/nativescript-regular.aar"