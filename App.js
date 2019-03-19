import React, { PureComponent } from 'react';
import { Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './src/homeScreen';
import Opacity from './src/1-opacity';
import TranslatePosition from './src/2-translate-position';
import Scale from './src/3-scale';
import WidthHeightValues from './src/4-width-height-values';
import AbsolutePosition from './src/5-absolute-position';
import ColorsInterpolate from './src/6-colors-backgroundColor';
import Rotation from './src/7-rotation';
import WidthHeightPercent from './src/8-width-height-percent';
import EasingScreen from './src/9-easing';
import SpringScreen from './src/10-spring';
import EventScreen from './src/11-event';
import DecayScreen from './src/12-decay';
import AddScreen from './src/13-add';
import DevideScreen from './src/14-devide/DevideScreen';
import MultiplyScreen from './src/15-multiply/MultiplyScreen';
import ModuloScreen from './src/16-modulo/ModuloScreen';
import ParallelScreen from './src/17-parallel/ParallelScreen';
import SequenceScreen from './src/18-sequence/SequenceScreen';
import StaggerScreen from './src/19-stagger/StaggerScreen';
import DelayScreen from './src/20-delay/DelayScreen';
import InterpolateInInterPolateScreen from './src/21-numbers and interpolates on interpolates/InterpolateInInterPolateScreen';
import ColorBackgroundColorScreen from './src/22-colorbackground color/ColorBackgroundColorScreen';
import RotationNewScreen from './src/23-rotation/RotationNewScreen';
import ExtrapolateScreen from './src/24-extrapolate/ExtrapolateScreen';
import VideoScreen from './src/25-video/VideoScreen';
import CreateAnimatedComponentsScreen from './src/27- create animated component/CreateAnimatedComponentsScreen';
import SetNativePropsScreen from './src/28 - set native props/SetNativePropsScreen';
import InterpolateD3 from './src/29-d3-interpolate/InterpolateD3';
import InterpolatePathSvg from './src/30 - d3-interpolate path simple svg/InterpolatePathSvg';
import ArtMorphTweenComplexSvg from './src/31-art,morph,tween complex svg paths/ArtMorphTweenComplexSvg';
import FubberAndAnimatedForBetterSvg from './src/32-fubber and animated for better svg/FubberAndAnimatedForBetterSvg';
import Cliff99 from './src/33- 99 cliff/Cliff99';
import PointerEventsScreen from './src/35- pointer events/PointerEventsScreen';
import FourConnerScreen from './src/37 - 4 conner/FourConnerScreen';
import TaggerdHeadsScreen from './src/39. tagggerd heads/TaggerdHeadsScreen';
import KittenCards from './src/41 kitten cards/KittenCards';
import StaggerFormItemsVisbilityOnMount from './src/42 stagger form items visibily on mount/StaggerFormItemsVisbilityOnMount';
import AnimatedQuestionaireWithProcessbar from './src/47- animated questionaire with processbar/AnimatedQuestionaireWithProcessbar';
import AnimatedProgessBarButton from './src/45- animated progess bar button/AnimatedProgessBarButton';
import PhotoGridSharedElement from './src/49 - photo grid shared element/PhotoGridSharedElement';
import AnimatedColorPicker from './src/51 - animated color picker/AnimatedColorPicker';
import FloatingActionButtonWithMenu from './src/53 floating action button with menu/FloatingActionButtonWithMenu';
import ApplicationIntroScreen from './src/55-application intro screen/ApplicationIntroScreen';
import EvolvingWriteButton from './src/57 evolving write button/\bEvolvingWriteButton';
import SocialCommentModal from './src/58 - social comment modal/SocialCommentModal';
import HorizontalParallaxScrollView from './src/59 - horizontal parallax scrollview/HorizontalParallaxScrollView';
import TapShowLoveFloattingHearts from './src/60 - tap show love floating hearts/TapShowLoveFloattingHearts';
import BouncingHeartShapedLikeButton from './src/61 - bouncing heart shaped like button/BouncingHeartShapedLikeButton';
import ExplodingHeartButton from './src/62 exploding heart button/ExplodingHeartButton';
import ExpandingNotifyInputWithSUccessMessage from './src/63 expanding notify input with success message/ExpandingNotifyInputWithSUccessMessage';

const AppNavigator = createAppContainer(
  createStackNavigator(
    {
      Home: { screen: HomeScreen, navigationOptions: { title: 'Home' } },
      Opacity: { screen: Opacity, navigationOptions: { title: 'Home' } },
      TranslatePosition: {
        screen: TranslatePosition,
        navigationOptions: { title: 'TranslatePosition' }
      },
      Scale: { screen: Scale, navigationOptions: { title: 'Scale' } },
      WidthHeightValues: {
        screen: WidthHeightValues,
        navigationOptions: { title: 'WidthHeightValues' }
      },
      AbsolutePosition: {
        screen: AbsolutePosition,
        navigationOptions: { title: 'AbsolutePosition' }
      },
      ColorsInterpolate: {
        screen: ColorsInterpolate,
        navigationOptions: { title: 'ColorsInterpolate' }
      },
      Rotation: { screen: Rotation, navigationOptions: { title: 'Rotation' } },
      WidthHeightPercent: {
        screen: WidthHeightPercent,
        navigationOptions: { title: 'WidthHeightPercent' }
      },
      EasingScreen: {
        screen: EasingScreen,
        navigationOptions: { title: 'EasingScreen' }
      },
      SpringScreen: {
        screen: SpringScreen,
        navigationOptions: { title: 'SpringScreen' }
      },
      EventScreen: {
        screen: EventScreen,
        navigationOptions: { title: 'EventScreen' }
      },
      DecayScreen: {
        screen: DecayScreen,
        navigationOptions: { title: 'DecayScreen' }
      },
      AddScreen: {
        screen: AddScreen,
        navigationOptions: { title: 'AddScreen' }
      },
      DevideScreen: {
        screen: DevideScreen,
        navigationOptions: { title: 'DevideScreen' }
      },
      MultiplyScreen: {
        screen: MultiplyScreen,
        navigationOptions: { title: 'MultiplyScreen' }
      },
      ModuloScreen: {
        screen: ModuloScreen,
        navigationOptions: { title: 'ModuloScreen' }
      },
      ParallelScreen: {
        screen: ParallelScreen,
        navigationOptions: { title: 'ParallelScreen' }
      },
      SequenceScreen: {
        screen: SequenceScreen,
        navigationOptions: { title: 'SequenceScreen' }
      },
      StaggerScreen: {
        screen: StaggerScreen,
        navigationOptions: { title: 'StaggerScreen' }
      },
      DelayScreen: {
        screen: DelayScreen,
        navigationOptions: { title: 'DelayScreen' }
      },
      InterpolateInInterPolateScreen: {
        screen: InterpolateInInterPolateScreen,
        navigationOptions: { title: 'InterpolateInInterPolateScreen' }
      },
      ColorBackgroundColorScreen: {
        screen: ColorBackgroundColorScreen,
        navigationOptions: { title: 'ColorBackgroundColorScreen' }
      },
      RotationNewScreen: {
        screen: RotationNewScreen,
        navigationOptions: { title: 'RotationNewScreen' }
      },
      ExtrapolateScreen: {
        screen: ExtrapolateScreen,
        navigationOptions: { title: 'ExtrapolateScreen' }
      },
      VideoScreen: {
        screen: VideoScreen,
        navigationOptions: { title: 'VideoScreen' }
      },

      CreateAnimatedComponentsScreen: {
        screen: CreateAnimatedComponentsScreen,
        navigationOptions: { title: 'CreateAnimatedComponentsScreen' }
      },
      SetNativePropsScreen: {
        screen: SetNativePropsScreen,
        navigationOptions: { title: 'SetNativePropsScreen' }
      },
      InterpolateD3: {
        screen: InterpolateD3,
        navigationOptions: { title: 'InterpolateD3' }
      },
      InterpolatePathSvg: {
        screen: InterpolatePathSvg,
        navigationOptions: { title: 'InterpolatePathSvg' }
      },
      ArtMorphTweenComplexSvg: {
        screen: ArtMorphTweenComplexSvg,
        navigationOptions: { title: 'ArtMorphTweenComplexSvg' }
      },
      FubberAndAnimatedForBetterSvg: {
        screen: FubberAndAnimatedForBetterSvg,
        navigationOptions: { title: 'FubberAndAnimatedForBetterSvg' }
      },
      Cliff99: {
        screen: Cliff99,
        navigationOptions: { title: 'Cliff99' }
      },
      PointerEventsScreen: {
        screen: PointerEventsScreen,
        navigationOptions: { title: 'PointerEventsScreen' }
      },
      FourConnerScreen: {
        screen: FourConnerScreen,
        navigationOptions: { title: 'FourConnerScreen' }
      },
      TaggerdHeadsScreen: {
        screen: TaggerdHeadsScreen,
        navigationOptions: { title: 'TaggerdHeadsScreen' }
      },
      KittenCards: {
        screen: KittenCards,
        navigationOptions: { title: 'KittenCards' }
      },
      StaggerFormItemsVisbilityOnMount: {
        screen: StaggerFormItemsVisbilityOnMount,
        navigationOptions: { title: 'StaggerFormItemsVisbilityOnMount' }
      },
      AnimatedProgessBarButton: {
        screen: AnimatedProgessBarButton,
        navigationOptions: { title: 'AnimatedProgessBarButton' }
      },
      AnimatedQuestionaireWithProcessbar: {
        screen: AnimatedQuestionaireWithProcessbar,
        navigationOptions: { title: 'AnimatedQuestionaireWithProcessbar' }
      },
      PhotoGridSharedElement: {
        screen: PhotoGridSharedElement,
        navigationOptions: { title: 'PhotoGridSharedElement' }
      },
      AnimatedColorPicker: {
        screen: AnimatedColorPicker,
        navigationOptions: { title: 'AnimatedColorPicker' }
      },
      FloatingActionButtonWithMenu: {
        screen: FloatingActionButtonWithMenu,
        navigationOptions: { title: 'FloatingActionButtonWithMenu' }
      },
      ApplicationIntroScreen: {
        screen: ApplicationIntroScreen,
        navigationOptions: { title: 'ApplicationIntroScreen' }
      },
      EvolvingWriteButton: {
        screen: EvolvingWriteButton,
        navigationOptions: { title: 'EvolvingWriteButton' }
      },
      SocialCommentModal: {
        screen: SocialCommentModal,
        navigationOptions: { title: 'SocialCommentModal' }
      },
      HorizontalParallaxScrollView: {
        screen: HorizontalParallaxScrollView,
        navigationOptions: { title: 'HorizontalParallaxScrollView' }
      },
      TapShowLoveFloattingHearts: {
        screen: TapShowLoveFloattingHearts,
        navigationOptions: { title: 'TapShowLoveFloattingHearts' }
      },
      BouncingHeartShapedLikeButton: {
        screen: BouncingHeartShapedLikeButton,
        navigationOptions: { title: 'BouncingHeartShapedLikeButton' }
      },
      ExplodingHeartButton: {
        screen: ExplodingHeartButton,
        navigationOptions: { title: 'ExplodingHeartButton' }
      },
      ExpandingNotifyInputWithSUccessMessage: {
        screen: ExpandingNotifyInputWithSUccessMessage,
        navigationOptions: { title: 'ExpandingNotifyInputWithSUccessMessage' }
      }
    },
    {
      initialRouteName: 'Home'
    }
  )
);
export default class App extends PureComponent {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <AppNavigator />
      </View>
    );
  }
}
