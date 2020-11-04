window.onload = function(){
    retrieveData();

    document.getElementById("notes").addEventListener('input', function(e){
        chrome.storage.sync.set(
            {
                "storedNotes" : e.target.value
            }
        )
    });
}

function retrieveData(){
    chrome.storage.sync.get("storedNotes", function(data) {
        console.log(data.storedNotes);
        if(data.storedNotes != "undefined"){
            document.getElementById("notes").value = data.storedNotes;
        }
    });
}