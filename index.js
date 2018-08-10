const app = "I don't do much.";

const token = 'ba73683bd553098c85bf2261e3ee625de587d00b'
fetch('https://api.github.com/johndaise/repos').
  then(res => res.json()).
  then(json => console.log(json));
