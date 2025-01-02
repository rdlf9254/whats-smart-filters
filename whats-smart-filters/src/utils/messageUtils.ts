import Message from "../types/Message";
import Option from "../types/Option";

const parseMessages = (txtContent: string) => {
  const messages = txtContent.split("\n");
  const userColors: Record<string, string> = {};
  let userIndex = 0;

  const parsedMessages = messages.map((msg) => {
    const regex = /^(\d{1,2}\/\d{1,2}\/\d{2,4}), (\d{2}:\d{2}) - (.*?): (.*)$/;
    const match = msg.match(regex);

    if (match) {
      const [_, date, time, user, message, color] = match;
      const formattedDate = new Date(
        date.split("/").reverse().join("-")
      ).toLocaleDateString("pt-BR");

      if (!userColors[user]) {
        userColors[user] = generatePastelColor(userIndex++);
      }

      return {
        date: formattedDate,
        time: `${time}:00`,
        user: user,
        message: message.trim(),
        color: userColors[user],
      };
    }
    return null;
  });

  return parsedMessages.filter(Boolean); // Remove valores nulos
};

const getAllUsers = (messages: Message[]) => {
  const users = messages.map((msg) => {
    return {
      label: msg.user,
      value: msg.user,
    };
  });

  return users;
};

const generatePastelColor = (index: number): string => {
  const hue = (index * 137) % 360;
  const saturation = 70;
  const lightness = 80;
  return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
};
export { parseMessages, getAllUsers };
