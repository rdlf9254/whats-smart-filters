export const parseMessages = (txtContent: string) => {
    const messages = txtContent.split("\n");
    const parsedMessages = messages.map((msg) => {
      const regex = /^(\d{1,2}\/\d{1,2}\/\d{2,4}), (\d{2}:\d{2}) - (.*?): (.*)$/;
      const match = msg.match(regex);
  
      if (match) {
        const [_, date, time, user, message] = match;
        const formattedDate = new Date(date.split("/").reverse().join("-")).toLocaleDateString("pt-BR");
        return {
          date: formattedDate,
          time: `${time}:00`,
          user: user,
          message: message.trim(),
        };
      }
      return null;
    });
  
    return parsedMessages.filter(Boolean); // Remove valores nulos
  };
  