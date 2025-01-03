import Message from "../types/Message";
import Option from "../types/Option";

const parseMessages = (txtContent: string) => {
  const lines = txtContent.split("\n");
  const userColors: Record<string, string> = {};
  const messages: Message[] = [];
  const regex = /^(\d{1,2}\/\d{1,2}\/\d{2,4}), (\d{2}:\d{2}) - (.*?): (.*)$/;
  let currentMessage: Message | null = null;
  let colorIndex = 0;

  for (const line of lines) {
    const match = line.match(regex);

    if (match) {
      if (currentMessage) {
        currentMessage.message = currentMessage.message.trim();
        messages.push(currentMessage);
      }

      const [_, date, time, user, message] = match;

      userColors[user] ||= generatePastelColor(colorIndex++);

      currentMessage = {
        date,
        time,
        user,
        message,
        color: userColors[user],
      };
    } else if (currentMessage) {
      currentMessage.message += `\n${line}`;
    }
  }

  if (currentMessage) {
    currentMessage.message = currentMessage.message.trim();
    messages.push(currentMessage);
  }

  return messages;
};

const getAllUsers = (messages: Message[]) => {
  const users: Set<string> = new Set<string>();

  messages.forEach((msg) => {
    users.add(msg.user)
  });

  const aux: Option[] = Array.from(users).map((user)=>{
    return {
      label: user,
      value: user,
    }
  })

  return aux;
};

const generatePastelColor = (index: number): string => {
  const hue = (index * 137) % 360;
  const saturation = 70;
  const lightness = 80;
  return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
};
export { parseMessages, getAllUsers };
