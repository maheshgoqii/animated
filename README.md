# Mp4 File include at root level directory, name as Android and IOS

# Expo - Node 22
- I have used expo in this, I can also use React Native CLI, but good for quickstart
- mannually install the slider, font, gredient package using expo, good for dependancies

```
   npx expo install @react-native-community/slider
   npx expo install expo-linear-gradient
   npx expo install @expo-google-fonts/roboto-mono

```

# Use of EAS
- create developement build using 
```
eas build --platform android --profile development
```

# Storage Strategies
- Local Storage - local level (depend on component lifecycle)
- Redux Storage - global level