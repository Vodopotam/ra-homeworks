'use strict';

const MessageHistory = ({list}) => {
	if (list.length == '0') {
		return null;
	}

	const messages = list.map(message => {
		switch (message.type) {
			case 'message' :
				return <Message from={message.from} message={message} key={message.id} />
				break;
			case 'response':
				return <Response from={message.from} message={message} key={message.id} />
				break;
			case 'typing':
				return <Typing from={message.from} message={message} key={message.id} />
				break;
		}
	});

	return (
		<ul>{messages}</ul>
		)
}

MessageHistory.defaultProps = {list: []};