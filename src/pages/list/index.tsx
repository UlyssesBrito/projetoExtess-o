import React, { useState } from "react";
import { Text, View, FlatList, TouchableOpacity } from "react-native";
import { style } from "./styles";
import { themas } from "../../global/themes";

type PropCard = {
  item: number;
  title: string;
  description: string;
  flag: "urgente" | "opcional";
};


const Card = ({ item }: { item: PropCard }) => {
  const [done, setDone] = useState(false);

  return (
    <TouchableOpacity
      style={[
        style.task,
        done && { backgroundColor: "rgba(0, 255, 0, 0.2)" },
      ]}
      onPress={() => setDone((currentState) => !currentState)}
    >
      <View style={[style.info]}>
        <Text style={[style.title, done && {textDecorationLine: "line-through", color: themas.colors.gray}]}>{item.title}</Text>
        <Text style={[style.description, done && {color: themas.colors.gray}]}>{item.description}</Text>
      </View>
      <Text
        style={
            [style.flag,
            {
          backgroundColor: item.flag === "opcional" ? "#87CEF6" : "#FF494C",
        }]}
      >
        {item.flag}
      </Text>
    </TouchableOpacity>
  );
};

// Dados para a lista
const data: Array<PropCard> = [
  {
    item: 0,
    title: "Realizar a lição de casa!",
    description: "página 10 a 20",
    flag: "urgente",
  },
  {
    item: 1,
    title: "Passear com cachorro!",
    description: "página 10 a 20",
    flag: "opcional",
  },
  {
    item: 2,
    title: "Sair para tomar açaí!",
    description: "página 10 a 20",
    flag: "urgente",
  },
];

export default function List() {
  return (
    <View style={style.container}>
      <View style={style.header}>
        <Text style={style.introText}>Bem Vindo, Ulysses</Text>
      </View>
      <View style={style.boxList}>
        <FlatList
          style={style.taskList}
          data={data}
          keyExtractor={(item) => item.item.toString()}
          renderItem={({ item }) => <Card item={item} />}
        />
      </View>
    </View>
  );
}
