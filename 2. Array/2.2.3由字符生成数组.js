// 调用字符串对象的 split() 方法也可以生成数组

var sentence = "the quick brown fox jumped over the lazy dog"
var words = sentence.split(" ")
for (var i = 0; i < words.length; ++i) {
  console.log("word " + i + ": " + words[i])
}