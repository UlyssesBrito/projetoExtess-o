import React, { forwardRef, Fragment, LegacyRef } from "react"; 
import { View, Text, TextInput, TextInputProps, TouchableOpacity } from "react-native";
import { FontAwesome, MaterialIcons, Octicons } from "@expo/vector-icons";
import { style } from "../../pages/login/styles";
import { themas } from "../../global/themes";
import { styles } from "./style";

type IconComponent = 
    | React.ComponentType<React.ComponentProps<typeof MaterialIcons>>
    | React.ComponentType<React.ComponentProps<typeof FontAwesome>>
    | React.ComponentType<React.ComponentProps<typeof Octicons>>;

type Props = TextInputProps & {
    IconLeft?: IconComponent;
    IconRigth?: IconComponent;
    IconLeftName?: string;
    IconRigthName?: string;
    title?: string;
    onIconLeftPress?: () => void;
    onIconRigthPress?: () => void;
};

 export const Input = forwardRef((props: Props, ref: LegacyRef<TextInput> | null) => {
    const { IconLeft, IconRigth, IconLeftName, IconRigthName, title, onIconLeftPress, onIconRigthPress, ...rest } = props;

    const calculateSizeWidth = () => {
        if(IconLeft && IconRigth){
            return '80%'
        }else if (IconLeft || IconRigth){
            return '90%'
        }else{
            return '100%'
        }

    }
    const calculateSizePaddingLest = () => {
        if(IconLeft && IconRigth){
            return 10;
        }else if (IconLeft || IconRigth){
            return 15;
        }else{
            return 20;
        }

    }

    return (
        <Fragment>
            {title&&<Text style={styles.titleInput}>{title}</Text>}
            <View style={[styles.BoxInput, {paddingLeft:calculateSizePaddingLest()}]}>
                {IconLeft && IconLeftName && (
                    <TouchableOpacity onPress={onIconLeftPress}  style={styles.Button}>
                        <IconLeft name={IconLeftName as any} size={20} color={themas.colors.gray} style={styles.Icon} />
                    </TouchableOpacity>
                )}
                <TextInput 
                    style={[
                        styles.input,{width:calculateSizeWidth()}
                    ]}
                    {...rest}
                />
                {IconRigth && IconRigthName && (
                    <TouchableOpacity onPress={onIconRigthPress} style={styles.Button}>
                        <IconRigth name={IconRigthName as any} size={20} color={themas.colors.gray} style={styles.Icon} />
                    </TouchableOpacity>
                )}
            </View>
        </Fragment>
    );
});
