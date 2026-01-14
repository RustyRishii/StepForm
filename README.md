# rnstepform

A simple, lightweight, and customizable multi-step form component for React Native with TypeScript support.

## Installation

```bash
npm install rnstepform
```

or

```bash
yarn add rnstepform
```

## Basic Usage

```tsx
import { RenderStepForm } from "rnstepform";
import { View, TextInput, Text } from "react-native";
import { useState } from "react";

function MyForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <RenderStepForm
      totalSteps={2}
      indicatorColor="#00bcd4"
      headText="Sign Up"
      continueButtonColor="#00bcd4"
    >
      {(currentStep) => {
        switch (currentStep) {
          case 1:
            return (
              <View>
                <Text>What's your name?</Text>
                <TextInput
                  value={name}
                  onChangeText={setName}
                  placeholder="Enter your name"
                />
              </View>
            );
          case 2:
            return (
              <View>
                <Text>What's your email?</Text>
                <TextInput
                  value={email}
                  onChangeText={setEmail}
                  placeholder="Enter your email"
                />
              </View>
            );
          default:
            return null;
        }
      }}
    </RenderStepForm>
  );
}
```

## Complete Example

Here's a full example with validation and completion handling:

```tsx
import { RenderStepForm } from "rnstepform";
import { View, TextInput, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";

function CareerDetailsForm() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gradYear, setGradYear] = useState("");
  const [profession, setProfession] = useState("");

  // Validate each step
  function isStepValid(step: number) {
    switch (step) {
      case 1:
        return name !== "";
      case 2:
        return age !== "";
      case 3:
        return gradYear !== "";
      case 4:
        return profession !== "";
      default:
        return false;
    }
  }

  // Handle form completion
  function handleComplete() {
    console.log("Form completed!", {
      name,
      age,
      gradYear,
      profession,
    });
    // Save data, navigate, etc.
  }

  return (
    <SafeAreaView style={{ flex: 1, padding: 16, backgroundColor: "white" }}>
      <RenderStepForm
        totalSteps={4}
        indicatorColor="aqua"
        headText="Career Details"
        continueButtonColor="aqua"
        isStepValid={isStepValid}
        onComplete={handleComplete}
      >
        {(step) => {
          switch (step) {
            case 1:
              return (
                <View>
                  <Text style={{ fontSize: 16 }}>Name</Text>
                  <TextInput
                    value={name}
                    onChangeText={setName}
                    placeholder="John Doe"
                    style={{
                      borderWidth: 1,
                      borderRadius: 8,
                      padding: 12,
                      fontSize: 16,
                      marginTop: 8,
                    }}
                  />
                </View>
              );

            case 2:
              return (
                <View>
                  <Text style={{ fontSize: 16 }}>Age</Text>
                  <TextInput
                    value={age}
                    onChangeText={setAge}
                    placeholder="25"
                    keyboardType="number-pad"
                    maxLength={2}
                    style={{
                      borderWidth: 1,
                      borderRadius: 8,
                      padding: 12,
                      fontSize: 16,
                      marginTop: 8,
                    }}
                  />
                </View>
              );

            case 3:
              return (
                <View>
                  <Text style={{ fontSize: 16 }}>Year of Graduation</Text>
                  <TextInput
                    value={gradYear}
                    onChangeText={setGradYear}
                    placeholder="2020"
                    keyboardType="numeric"
                    maxLength={4}
                    style={{
                      borderWidth: 1,
                      borderRadius: 8,
                      padding: 12,
                      fontSize: 16,
                      marginTop: 8,
                    }}
                  />
                </View>
              );

            case 4:
              return (
                <View>
                  <Text style={{ fontSize: 16 }}>Current Profession</Text>
                  <TextInput
                    value={profession}
                    onChangeText={setProfession}
                    placeholder="Software Engineer"
                    style={{
                      borderWidth: 1,
                      borderRadius: 8,
                      padding: 12,
                      fontSize: 16,
                      marginTop: 8,
                    }}
                  />
                </View>
              );

            default:
              return null;
          }
        }}
      </RenderStepForm>
    </SafeAreaView>
  );
}
```

## Props

| Prop                  | Type                                 | Required | Description                                                               |
| --------------------- | ------------------------------------ | -------- | ------------------------------------------------------------------------- |
| `totalSteps`          | `number`                             | ✅       | Total number of steps in your form                                        |
| `indicatorColor`      | `string`                             | ✅       | Color of the progress bar                                                 |
| `headText`            | `string`                             | ✅       | Header text displayed at the top                                          |
| `continueButtonColor` | `string`                             | ✅       | Background color of the continue/complete button                          |
| `children`            | `(currentStep: number) => ReactNode` | ✅       | Function that renders content based on current step                       |
| `isStepValid`         | `(step: number) => boolean`          | ❌       | Optional validation function. Return `true` to enable the continue button |
| `onComplete`          | `() => void`                         | ❌       | Optional callback when user completes the last step                       |

## How It Works

1. **Automatic Navigation**: The component handles forward/backward navigation automatically
2. **Progress Tracking**: Shows current step and progress bar
3. **Validation**: Disable the continue button until the current step is valid
4. **Completion**: Execute custom logic when the user reaches the final step

## Features

✅ Simple and intuitive API  
✅ Built-in progress indicator  
✅ Step validation support  
✅ Back button navigation  
✅ TypeScript support  
✅ Fully customizable colors  
✅ Lightweight with zero dependencies

## TypeScript Support

Full TypeScript support included:

```tsx
import { RenderStepForm, RenderStepFormProps } from "rnstepform";

const props: RenderStepFormProps = {
  totalSteps: 3,
  indicatorColor: "#007AFF",
  headText: "Setup",
  continueButtonColor: "#007AFF",
  children: (step) => <View />,
};
```

## Tips

- Wrap the component in a `SafeAreaView` for proper spacing on notched devices
- Use `isStepValid` to prevent users from proceeding with invalid data
- The `children` function receives the current step number (1-indexed)
- The continue button automatically becomes "Complete ➡️" on the last step
- Your number of `totalSteps`, and Form switch cases should be the same. If you have 4
  step form, then you should have 4 switch cases.

## License

MIT
