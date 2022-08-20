//This function will be called when user click changing language
function translate(language, tagAttr){
    var translate = new Translate();
    translate.init(tagAttr, language);
    translate.process();
    if(language == 'en'){
      $("#enTranslator").css('color', '#f4623a');
      $("#jpTranslator").css('color', '#212529');
    } 
    if(language == 'kh'){
      $("#jpTranslator").css('color', '#f4623a');
      $("#enTranslator").css('color', '#212529');
    }
}
$(document).ready(function(){
  //This is id of HTML element (English) with attribute language-tag
  $("#enTranslator").click(function(){
    translate('en', 'language-tag');
  });
  //This is id of HTML element (Japanese) with attribute language-tag
  $("#jpTranslator").click(function(){
    translate('jp', 'language-tag');
  });
});