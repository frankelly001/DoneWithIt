import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import ListItem from "../components/ListItem";
import ListItemDeleteAction from "../components/ListItemDeleteAction";
import ListItemSeparator from "../components/ListItemSeparator";
import Screen from "../components/Screen";

const initialMessages = [
  {
    id: 1,
    title:
      "T1 Everton will contact the Professional Game Match Officials Limited (PGMOL) to query why a challenge they feel should have led to a penalty was not reviewed further in the Merseyside derby.",
    description:
      "D1 With the game goalless, forward Anthony Gordon went over in the area following a challenge by Liverpool's Joel Matip Eight minutes after the incident Andy Robertson scored Liverpool's opener with Divock Origi sealing the 2-0 win The defeat left Everton in the relegation zone with six games to go.Frank Lampard's side are two points below Burnley, who occupy the final position of safety, though the Toffees have a game in hand.Lampard suggested post match that a penalty would have been given if the challenge had been made on a Liverpool playerIt was a penalty, you don't get them at Anfield, he said If that was Mohamed Salah at the Kop end, I think [the referee] gives that. It was a foul on Anthony.",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/mosh.jpg"),
  },
];

const MessagesScreen = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    const newMessages = messages.filter((m) => m.id !== message.id);
    setMessages(newMessages);
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("Message selected", item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 2,
              title: "T2",
              description: "D2",
              image: require("../assets/mosh.jpg"),
            },
          ]);
        }}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default MessagesScreen;
