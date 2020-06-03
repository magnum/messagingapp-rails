import consumer from "./consumer"

consumer.subscriptions.create("RoomChannel", {
  connected() {
    // Called when the subscription is ready for use on the server
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    /*
    var node = document.createElement("p"); 
    var textnode = document.createTextNode(data.content.message); 
    node.id = data.content.id;
    node.appendChild(textnode); 
    document.getElementById("new_message").appendChild(node);
    */
    var lines = document.getElementById("chats").value;
    document.getElementById("chats").value = data.content.message + "\n" + lines;
    
    document.getElementById('chat_message').value= ''

    // Called when there's incoming data on the websocket for this channel
  }
});
