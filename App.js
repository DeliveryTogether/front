import * as React from "react";
import { SafeAreaView, StatusBar, Text, View, TextInput } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function App() {
  const [page, setPage] = React.useState(false);
  return (
    <>
      <SafeAreaView style={{ flex: 0, backgroundColor: "rgb(128,112,118)" }} />
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            padding: 10,
            backgroundColor: "rgb(128,112,118)",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <TouchableOpacity onPress={() => setPage(false)}>
            {page && <Text style={{ fontSize: 30, color: "#fff" }}>{"<"}</Text>}
          </TouchableOpacity>
          <Text style={{ fontSize: 30, color: "#fff" }}>
            {page ? "SIGN UP" : "LOGIN"}
          </Text>
          <Text style={{ opacity: 0, fontSize: 30, color: "#fff" }}>{"<"}</Text>
        </View>
        <View
          style={{
            flex: 13,
            backgroundColor: "white",
            padding: 10,
            paddingTop: 100,
          }}
        >
          {page ? (
            <>
              <TextInput
                style={{
                  width: "100%",
                  borderColor: "lightgrey",
                  borderWidth: 1,
                  padding: 10,
                  borderRadius: 10,
                  fontSize: 24,
                  marginBottom: 50,
                }}
                placeholder="id"
              />
              <TextInput
                style={{
                  width: "100%",
                  borderColor: "lightgrey",
                  borderWidth: 1,
                  padding: 10,
                  borderRadius: 10,
                  fontSize: 24,
                  marginBottom: 50,
                }}
                placeholder="password"
              />
              <TextInput
                style={{
                  width: "100%",
                  borderColor: "lightgrey",
                  borderWidth: 1,
                  padding: 10,
                  borderRadius: 10,
                  fontSize: 24,
                  marginBottom: 50,
                }}
                placeholder="phoneNum"
              />
              <TextInput
                style={{
                  width: "100%",
                  borderColor: "lightgrey",
                  borderWidth: 1,
                  padding: 10,
                  borderRadius: 10,
                  fontSize: 24,
                  marginBottom: 50,
                }}
                placeholder="nickname"
              />
            </>
          ) : (
            <>
              <TextInput
                style={{
                  width: "100%",
                  borderColor: "lightgrey",
                  borderWidth: 1,
                  padding: 10,
                  borderRadius: 10,
                  fontSize: 24,
                  marginBottom: 50,
                }}
                placeholder="id"
              />
              <TextInput
                style={{
                  width: "100%",
                  borderColor: "lightgrey",
                  borderWidth: 1,
                  padding: 10,
                  borderRadius: 10,
                  fontSize: 24,
                  marginBottom: 30,
                }}
                placeholder="password"
              />
            </>
          )}
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            {!page && (
              <TouchableOpacity style={{ marginRight: 40 }}>
                <View
                  style={{
                    width: "100%",
                    backgroundColor: "rgb(220,168,110)",
                    paddingHorizontal: 30,
                    paddingVertical: 15,
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 5,
                  }}
                >
                  <Text style={{ color: "white", fontSize: 20 }}>LOGIN</Text>
                </View>
              </TouchableOpacity>
            )}
            <TouchableOpacity onPress={() => setPage(true)}>
              <View
                style={{
                  width: "100%",
                  backgroundColor: "rgb(220,168,110)",
                  paddingHorizontal: 30,
                  paddingVertical: 15,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 5,
                }}
              >
                <Text style={{ color: "white", fontSize: 20 }}>SIGN UP</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}
