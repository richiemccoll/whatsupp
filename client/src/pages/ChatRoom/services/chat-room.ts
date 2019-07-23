const chatRoomService = {
  async getCurrentChat(id: string) {
    const getCurrentChatQuery = `
            query GetChat($chatId: ID!) {
            chat(chatId: $chatId) {
                id
                name
                picture
                messages {
                id
                content
                createdAt
                }
            }
            }
        `;

    const response = await fetch('/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: getCurrentChatQuery,
        variables: { chatId: id },
      }),
    });
    const {
      data: { chat },
    } = await response.json();
    return chat;
  },
};

export default chatRoomService;
