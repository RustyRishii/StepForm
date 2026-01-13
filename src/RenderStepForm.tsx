// import { View, TextInput, StyleSheet, Text } from "react-native";

// export type RenderStepFormProps = {
//   detailState: number;
//   name: string;
//   setName: (name: string) => void;
//   age: string;
//   setAge: (age: string) => void;
//   gradYear: string;
//   setGradYear: (gradYear: string) => void;
//   selectedValue: string | null;
//   setSelectedValue: (status: string | null) => void;
//   profession: string;
//   setProfession: (profession: string) => void;
// };

// const RenderStepForm: React.FC<RenderStepFormProps> = ({
//   detailState,
//   name,
//   setName,
//   age,
//   setAge,
//   gradYear,
//   setGradYear,
//   selectedValue,
//   setSelectedValue,
//   profession: profession,
//   setProfession: setProfession,
// }) => {
//   switch (detailState) {
//     case 1:
//       return (
//         <View>
//           <Text style={{ fontSize: 16 }}>Name</Text>
//           <View style={{ marginBottom: 8 }} />
//           <TextInput
//             value={name}
//             onChangeText={setName}
//             autoFocus={true}
//             autoComplete="name"
//             placeholder="John Doe"
//             style={{
//               borderWidth: 1,
//               borderRadius: 8,
//               padding: 12,
//               fontSize: 16,
//             }}
//           />
//           <View style={{ marginBottom: 8 }} />
//           <Text style={{ color: "darkgray", fontSize: 12 }}>
//             Please press continue to proceed
//           </Text>
//         </View>
//       );

//     case 2:
//       return (
//         <View>
//           <Text style={{ fontSize: 16 }}>Age</Text>
//           <View style={{ marginBottom: 8 }} />
//           <TextInput
//             placeholder="Age"
//             maxLength={2}
//             value={age}
//             key="age-input"
//             onChangeText={setAge}
//             keyboardType="number-pad"
//             autoFocus={true}
//             style={{
//               borderRadius: 8,
//               borderWidth: 1,
//               padding: 12,
//               fontSize: 16,
//             }}
//           />
//         </View>
//       );
//     case 3:
//       return (
//         <View>
//           <Text style={{ fontSize: 16 }}>Year of graduation</Text>
//           <View style={{ marginBottom: 8 }} />
//           <TextInput
//             keyboardType="numeric"
//             value={gradYear}
//             onChangeText={setGradYear}
//             maxLength={4}
//             autoFocus={true}
//             placeholder="Graduation year"
//             style={{
//               borderWidth: 1,
//               borderRadius: 8,
//               padding: 12,
//               fontSize: 16,
//             }}
//           />

//           <View style={{ marginVertical: 16 }} />

//           <Text style={{ fontSize: 16 }}>Employment status</Text>
//           <View style={{ marginBottom: 8 }} />
//         </View>
//       );

//     case 4:
//       return (
//         <View>
//           <Text style={{ fontSize: 16 }}>Current profession</Text>
//           <TextInput
//             value={profession}
//             onChangeText={setProfession}
//             autoFocus={true}
//             placeholder="Software engineer"
//             style={{
//               borderWidth: 1,
//               borderRadius: 8,
//               padding: 12,
//               fontSize: 16,
//             }}
//           />
//         </View>
//       );
//     default:
//       return null;
//   }
// };

// export default RenderStepForm;

// // import React from "react";
// // import { View, TextInput, Text, StyleSheet } from "react-native";

// // export type StepConfig = {
// //   id: string;
// //   label: string;
// //   placeholder?: string;
// //   inputType?: "text" | "number" | "email";
// //   keyboardType?: "default" | "numeric" | "number-pad" | "email-address";
// //   maxLength?: number;
// //   autoComplete?: "name" | "email" | "off";
// //   helperText?: string;
// // };

// // export type RenderStepFormProps = {
// //   currentStep: number;
// //   steps: StepConfig[];
// //   formData: Record<string, string>;
// //   onFieldChange: (fieldId: string, value: string) => void;
// //   styles?: {
// //     container?: object;
// //     label?: object;
// //     input?: object;
// //     helperText?: object;
// //   };
// // };

// // const RenderStepForm: React.FC<RenderStepFormProps> = ({
// //   currentStep,
// //   steps,
// //   formData,
// //   onFieldChange,
// //   styles: customStyles,
// // }) => {
// //   const step = steps.find((s) => s.id === `step-${currentStep}`);

// //   if (!step) {
// //     return null;
// //   }

// //   return (
// //     <View style={[defaultStyles.container, customStyles?.container]}>
// //       <Text style={[defaultStyles.label, customStyles?.label]}>
// //         {step.label}
// //       </Text>
// //       <View style={{ marginBottom: 8 }} />
// //       <TextInput
// //         value={formData[step.id] || ""}
// //         onChangeText={(value) => onFieldChange(step.id, value)}
// //         placeholder={step.placeholder}
// //         keyboardType={step.keyboardType || "default"}
// //         maxLength={step.maxLength}
// //         autoComplete={step.autoComplete || "off"}
// //         autoFocus={true}
// //         style={[defaultStyles.input, customStyles?.input]}
// //       />
// //       {step.helperText && (
// //         <>
// //           <View style={{ marginBottom: 8 }} />
// //           <Text style={[defaultStyles.helperText, customStyles?.helperText]}>
// //             {step.helperText}
// //           </Text>
// //         </>
// //       )}
// //     </View>
// //   );
// // };

// // const defaultStyles = StyleSheet.create({
// //   container: {
// //     padding: 0,
// //   },
// //   label: {
// //     fontSize: 16,
// //     fontWeight: "500",
// //   },
// //   input: {
// //     borderWidth: 1,
// //     borderColor: "#ccc",
// //     borderRadius: 8,
// //     padding: 12,
// //     fontSize: 16,
// //   },
// //   helperText: {
// //     color: "darkgray",
// //     fontSize: 12,
// //   },
// // });

// // export default RenderStepForm;

import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { FC, useState, ReactNode } from "react";

interface RenderStepFormProps {
  totalSteps: number;
  indicatorColor: string;
  headText: string;
  continueButtonColor: string;
  children: (currentStep: number) => ReactNode; // Function that receives current step
  isStepValid?: (step: number) => boolean;
  onComplete?: () => void;
}

const RenderStepForm: FC<RenderStepFormProps> = ({
  totalSteps,
  indicatorColor,
  headText,
  continueButtonColor,
  children,
  isStepValid = () => true,
  onComplete,
}) => {
  const [detailState, setDetailState] = useState<number>(1);

  async function DetailNavAhead() {
    if (detailState < totalSteps) {
      setDetailState(detailState + 1);
    } else if (detailState === totalSteps) {
      onComplete?.();
    }
  }

  async function DetailNavPrev() {
    if (detailState > 1) {
      setDetailState(detailState - 1);
    }
  }

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          alignContent: "flex-end",
        }}
      >
        <Pressable disabled={detailState === 1} onPress={() => DetailNavPrev()}>
          <Text style={{ fontSize: 18 }}>
            ←
            {/* <BackArrow
              style={{ opacity: detailState <= 1 ? 0.5 : 1 }}
              width={25}
              height={25}
            /> */}
          </Text>
        </Pressable>

        <Text style={{ textAlign: "center", fontSize: 24 }}>{headText}</Text>

        <Text
          style={{
            fontSize: 18,
            textAlign: "right",
            alignItems: "flex-end",
            justifyContent: "center",
            alignContent: "flex-end",
          }}
        >
          {detailState}/{totalSteps}
        </Text>
      </View>

      {/* Progress indicator */}
      <View
        style={{
          backgroundColor: "darkgray",
          height: 10,
          marginVertical: 20,
          borderRadius: 12,
        }}
      >
        <View
          style={{
            backgroundColor: indicatorColor,
            height: 10,
            width: `${(detailState / totalSteps) * 100}%`,
            borderRadius: 12,
          }}
        />
      </View>

      <View style={{ marginTop: 8 }} />

      {/* Call the children function with current step */}
      {children(detailState)}

      <View style={{ marginTop: "auto" }}>
        <Pressable
          disabled={!isStepValid(detailState)}
          onPress={() => DetailNavAhead()}
          style={{
            backgroundColor: continueButtonColor,
            padding: 10,
            opacity: isStepValid(detailState) ? 1 : 0.5,
            borderRadius: 12,
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ fontWeight: "bold" }}>
            {detailState === totalSteps ? "Complete ➡️" : "Continue"}
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default RenderStepForm;
