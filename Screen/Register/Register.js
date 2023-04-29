import { Text, View, TextInput, Button } from "react-native";
import React, { Component, useState } from "react";
import Loading from "../../components/Loading";
import { auth } from "../../FirebaseConfig";
export default function Register({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confrompassword, setConFromPassword] = useState("");

  const SignIn = () => {
    <Loading />;
    navigation.push("Login");
  };

  const onHandleSignup = async () => {
    firebase.auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        // ..
      });
  };

  return (
    <View style={{ flex: 1, marginTop: 200 }}>
      <Text style={{ fontSize: 40, fontWeight: "bold" }}>Register</Text>
      <Text />
      <Text>Email</Text>
      <TextInput
        style={{ borderWidth: 1, borderColor: "black" }}
        value={email}
        onChangeText={(value) => setEmail(value)}
      />
      <Text />
      <Text>PassWord</Text>
      <TextInput
        style={{ borderWidth: 1, borderColor: "black" }}
        value={password}
        onChangeText={(value) => setPassword(value)}
      />
      <Text />
      <Text>ConFormPassWord</Text>
      <TextInput
        style={{ borderWidth: 1, borderColor: "black" }}
        value={confrompassword}
        onChangeText={(value) => setConFromPassword(value)}
      />
      <Text />
      <Button onPress={SignIn} title="SignIn" />
      <Text />
      <Button onPress={onHandleSignup} title="SignUp" />
    </View>
  );
}
