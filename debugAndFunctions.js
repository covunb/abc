var pageType = pageType  /*DONT FORGET TO UNCOMMENT THIS AND ADD THE PAGE TYPE*/
            function addInfoArray (idNum, name, desc, source, type) {
                idNum = nameList[idNum] = name; descList[idNum] = desc; sourceList [idNum] = source; pageType [idNum] = type;
            }
            function getInfoArray (idNum) {
                var gameName = nameList[idNum]; var gameDesc = DescList[idNum]; var gameSource = sourceList[idNum]; var pageType = typeList[idNum];
                return(gameName, gameDesc, gameSource, pageType);
            }
            
            function loadInfoObject (idNum, name, desc, source, type) {
                var pageInfo = {idNum: idNum, name: name, desc: desc, source: source, type: type};
           }
           function getInfoObject (requestedInfo, idNum) {
                return pageInfo.requestedInfo [idNum - 1];
           }
        
        