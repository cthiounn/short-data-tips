document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('pre code').forEach(function(codeBlock) {
      var button = document.createElement('button');
      button.className = 'copy-code-button';
      button.type = 'button';
      button.innerText = 'Copy';
  
      button.addEventListener('click', function() {
        var code = codeBlock.innerText;
        navigator.clipboard.writeText(code).then(function() {
          button.innerText = 'Copied!';
          setTimeout(function() {
            button.innerText = 'Copy';
          }, 2000);
        }).catch(function(err) {
          console.error('Failed to copy text: ', err);
        });
      });
  
      var pre = codeBlock.parentNode;
      if (pre.parentNode.classList.contains('highlight')) {
        pre.parentNode.insertBefore(button, pre);
      } else {
        var wrapper = document.createElement('div');
        wrapper.classList.add('code-container');
        pre.parentNode.insertBefore(wrapper, pre);
        wrapper.appendChild(pre);
        wrapper.appendChild(button);
      }
    });
  });
  