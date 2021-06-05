backend service (golang)
- sending last 10 lines
- websocket server *
	- entry log to file
	- send updates to frontend
	- watch file changes (push only the updates) *
	- only read last 10 lines *


Good to have :-
- add end point


frontend (html/js)
- page load
	- create websocket
	- fetch last 10 lines


