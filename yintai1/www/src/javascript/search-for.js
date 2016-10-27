$(function() {
    var availableTags = [
      "衬衣",
      "毛呢大衣",
      "裤子",
      "毛针织衫",
      "风衣",
      "棉衣棉服",
      "高腰裤",
      "牛仔裤",
      "红人私服",
      "卫衣",
      "小西装"
    ];
    $("#tags").autocomplete({
      source:availableTags
    });
  }); 