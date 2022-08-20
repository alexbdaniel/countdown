function translateToJapanese() {

    this.init = function(character, langauge){
        this.character = character;
        this.langauge = langauge;
    }

  }

    this.process = function(){
        _self = this;
        var xrhFile = new XMLHttpRequest();

        xrhFile.open("GET", "timer2/"+this.langauge+".json", false);
        xrhFile.onreadystatechange = function ()
        {
            if(xrhFile.readyState === 4)
			{
				if(xrhFile.status === 200 || xrhFile.status == 0)
				{
					var languageObject = JSON.parse(xrhFile.responseText);
					var allDom = document.getElementsByTagName("*");
					for(var i =0; i < allDom.length; i++){
						var elem = allDom[i];
						var key = elem.getAttribute(_self.attribute);
						if(key != null) {
							elem.innerHTML = languageObject[key]  ;
						}
					}
				
				}
			}
		}
		xrhFile.send();
    }