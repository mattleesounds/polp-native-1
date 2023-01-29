import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { useTailwind } from 'tailwind-rn/dist';

const Feed = () => {
  const tw = useTailwind();

  return (
    <SafeAreaView>
      <Text style={tw("text-red-500")}>Feed</Text>
    </SafeAreaView>
  )
}

export default Feed