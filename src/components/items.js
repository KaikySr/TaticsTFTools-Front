import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Image } from 'react-native';
import Modal from 'react-native-modal';

export default function Items(props) {

  const items = [
  {
    name : 'garra',
    components: ['xabu', 'capa'],
    desc : 'essa eh a garra do dagrao',
    photo : 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2FXabuSC%2F&psig=AOvVaw0xYbckLntI7dUk3Gf_BaAD&ust=1700851356300000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLDdipnj2oIDFQAAAAAdAAAAABAE'
  },
  {  
    name : 'xisde',
    components: ['xabu', 'capa'],
    desc : 'essa eh a garra do dagrao',
    photo : 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2FXabuSC%2F&psig=AOvVaw0xYbckLntI7dUk3Gf_BaAD&ust=1700851356300000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLDdipnj2oIDFQAAAAAdAAAAABAE'
  },
  {
    name : 'garra',
    components: ['xabu', 'capa'],
    desc : 'essa eh a garra do dagrao',
    photo : 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2FXabuSC%2F&psig=AOvVaw0xYbckLntI7dUk3Gf_BaAD&ust=1700851356300000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLDdipnj2oIDFQAAAAAdAAAAABAE'
  },
  {  
    name : 'xisde',
    components: ['xabu', 'capa'],
    desc : 'essa eh a garra do dagrao',
    photo : 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2FXabuSC%2F&psig=AOvVaw0xYbckLntI7dUk3Gf_BaAD&ust=1700851356300000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLDdipnj2oIDFQAAAAAdAAAAABAE'
  },
  { 
    name : 'banana',
    components: ['xabu', 'capa'],
    desc : 'essa eh a garra do dagrao',
    photo : 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2FXabuSC%2F&psig=AOvVaw0xYbckLntI7dUk3Gf_BaAD&ust=1700851356300000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLDdipnj2oIDFQAAAAAdAAAAABAE'
  },
  { 
    name : 'banana',
    components: ['xabu', 'capa'],
    desc : 'essa eh a garra do dagrao',
    photo : 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2FXabuSC%2F&psig=AOvVaw0xYbckLntI7dUk3Gf_BaAD&ust=1700851356300000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLDdipnj2oIDFQAAAAAdAAAAABAE'
  },
  { 
    name : 'banana',
    components: ['xabu', 'capa'],
    desc : 'essa eh a garra do dagrao',
    photo : 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2FXabuSC%2F&psig=AOvVaw0xYbckLntI7dUk3Gf_BaAD&ust=1700851356300000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLDdipnj2oIDFQAAAAAdAAAAABAE'
  },
  { 
    name : 'banana',
    components: ['xabu', 'capa'],
    desc : 'essa eh a garra do dagrao',
    photo : 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2FXabuSC%2F&psig=AOvVaw0xYbckLntI7dUk3Gf_BaAD&ust=1700851356300000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLDdipnj2oIDFQAAAAAdAAAAABAE'
  },
  { 
    name : 'banana',
    components: ['xabu', 'capa'],
    desc : 'essa eh a garra do dagrao',
    photo : 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2FXabuSC%2F&psig=AOvVaw0xYbckLntI7dUk3Gf_BaAD&ust=1700851356300000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLDdipnj2oIDFQAAAAAdAAAAABAE'
  },
  { 
    name : 'banana',
    components: ['xabu', 'capa'],
    desc : 'essa eh a garra do dagrao',
    photo : 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2FXabuSC%2F&psig=AOvVaw0xYbckLntI7dUk3Gf_BaAD&ust=1700851356300000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLDdipnj2oIDFQAAAAAdAAAAABAE'
  },
  {
    name : 'garra',
    components: ['xabu', 'capa'],
    desc : 'essa eh a garra do dagrao',
    photo : 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2FXabuSC%2F&psig=AOvVaw0xYbckLntI7dUk3Gf_BaAD&ust=1700851356300000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLDdipnj2oIDFQAAAAAdAAAAABAE'
  },
  {  
    name : 'xisde',
    components: ['xabu', 'capa'],
    desc : 'essa eh a garra do dagrao',
    photo : 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2FXabuSC%2F&psig=AOvVaw0xYbckLntI7dUk3Gf_BaAD&ust=1700851356300000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLDdipnj2oIDFQAAAAAdAAAAABAE'
  },
  { 
    name : 'banana',
    components: ['xabu', 'capa'],
    desc : 'essa eh a garra do dagrao',
    photo : 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2FXabuSC%2F&psig=AOvVaw0xYbckLntI7dUk3Gf_BaAD&ust=1700851356300000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLDdipnj2oIDFQAAAAAdAAAAABAE'
  },
  { 
    name : 'banana',
    components: ['xabu', 'capa'],
    desc : 'essa eh a garra do dagrao',
    photo : 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2FXabuSC%2F&psig=AOvVaw0xYbckLntI7dUk3Gf_BaAD&ust=1700851356300000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLDdipnj2oIDFQAAAAAdAAAAABAE'
  },
  { 
    name : 'banana',
    components: ['xabu', 'capa'],
    desc : 'essa eh a garra do dagrao',
    photo : 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2FXabuSC%2F&psig=AOvVaw0xYbckLntI7dUk3Gf_BaAD&ust=1700851356300000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLDdipnj2oIDFQAAAAAdAAAAABAE'
  },
  { 
    name : 'banana',
    components: ['xabu', 'capa'],
    desc : 'essa eh a garra do dagrao',
    photo : 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2FXabuSC%2F&psig=AOvVaw0xYbckLntI7dUk3Gf_BaAD&ust=1700851356300000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLDdipnj2oIDFQAAAAAdAAAAABAE'
  },
  { 
    name : 'banana',
    components: ['xabu', 'capa'],
    desc : 'essa eh a garra do dagrao',
    photo : 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2FXabuSC%2F&psig=AOvVaw0xYbckLntI7dUk3Gf_BaAD&ust=1700851356300000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLDdipnj2oIDFQAAAAAdAAAAABAE'
  },
  { 
    name : 'banana',
    components: ['xabu', 'capa'],
    desc : 'essa eh a garra do dagrao',
    photo : 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2FXabuSC%2F&psig=AOvVaw0xYbckLntI7dUk3Gf_BaAD&ust=1700851356300000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLDdipnj2oIDFQAAAAAdAAAAABAE'
  },
  {
    name : 'garra',
    components: ['xabu', 'capa'],
    desc : 'essa eh a garra do dagrao',
    photo : 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2FXabuSC%2F&psig=AOvVaw0xYbckLntI7dUk3Gf_BaAD&ust=1700851356300000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLDdipnj2oIDFQAAAAAdAAAAABAE'
  },
  {  
    name : 'xisde',
    components: ['xabu', 'capa'],
    desc : 'essa eh a garra do dagrao',
    photo : 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2FXabuSC%2F&psig=AOvVaw0xYbckLntI7dUk3Gf_BaAD&ust=1700851356300000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLDdipnj2oIDFQAAAAAdAAAAABAE'
  },
  { 
    name : 'banana',
    components: ['xabu', 'capa'],
    desc : 'essa eh a garra do dagrao',
    photo : 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2FXabuSC%2F&psig=AOvVaw0xYbckLntI7dUk3Gf_BaAD&ust=1700851356300000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLDdipnj2oIDFQAAAAAdAAAAABAE'
  },
  { 
    name : 'banana',
    components: ['xabu', 'capa'],
    desc : 'essa eh a garra do dagrao',
    photo : 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2FXabuSC%2F&psig=AOvVaw0xYbckLntI7dUk3Gf_BaAD&ust=1700851356300000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLDdipnj2oIDFQAAAAAdAAAAABAE'
  },
  { 
    name : 'banana',
    components: ['xabu', 'capa'],
    desc : 'essa eh a garra do dagrao',
    photo : 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2FXabuSC%2F&psig=AOvVaw0xYbckLntI7dUk3Gf_BaAD&ust=1700851356300000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLDdipnj2oIDFQAAAAAdAAAAABAE'
  },
  { 
    name : 'banana',
    components: ['xabu', 'capa'],
    desc : 'essa eh a garra do dagrao',
    photo : 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2FXabuSC%2F&psig=AOvVaw0xYbckLntI7dUk3Gf_BaAD&ust=1700851356300000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLDdipnj2oIDFQAAAAAdAAAAABAE'
  },
  { 
    name : 'banana',
    components: ['xabu', 'capa'],
    desc : 'essa eh a garra do dagrao',
    photo : 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2FXabuSC%2F&psig=AOvVaw0xYbckLntI7dUk3Gf_BaAD&ust=1700851356300000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLDdipnj2oIDFQAAAAAdAAAAABAE'
  },
  { 
    name : 'banana',
    components: ['xabu', 'capa'],
    desc : 'essa eh a garra do dagrao',
    photo : 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2FXabuSC%2F&psig=AOvVaw0xYbckLntI7dUk3Gf_BaAD&ust=1700851356300000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLDdipnj2oIDFQAAAAAdAAAAABAE'
  },
  {
    name : 'garra',
    components: ['xabu', 'capa'],
    desc : 'essa eh a garra do dagrao',
    photo : 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2FXabuSC%2F&psig=AOvVaw0xYbckLntI7dUk3Gf_BaAD&ust=1700851356300000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLDdipnj2oIDFQAAAAAdAAAAABAE'
  },
  {  
    name : 'xisde',
    components: ['xabu', 'capa'],
    desc : 'essa eh a garra do dagrao',
    photo : 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2FXabuSC%2F&psig=AOvVaw0xYbckLntI7dUk3Gf_BaAD&ust=1700851356300000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLDdipnj2oIDFQAAAAAdAAAAABAE'
  },
  { 
    name : 'banana',
    components: ['xabu', 'capa'],
    desc : 'essa eh a garra do dagrao',
    photo : 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2FXabuSC%2F&psig=AOvVaw0xYbckLntI7dUk3Gf_BaAD&ust=1700851356300000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLDdipnj2oIDFQAAAAAdAAAAABAE'
  },
  { 
    name : 'banana',
    components: ['xabu', 'capa'],
    desc : 'essa eh a garra do dagrao',
    photo : 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2FXabuSC%2F&psig=AOvVaw0xYbckLntI7dUk3Gf_BaAD&ust=1700851356300000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLDdipnj2oIDFQAAAAAdAAAAABAE'
  },
  { 
    name : 'banana',
    components: ['xabu', 'capa'],
    desc : 'essa eh a garra do dagrao',
    photo : 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2FXabuSC%2F&psig=AOvVaw0xYbckLntI7dUk3Gf_BaAD&ust=1700851356300000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLDdipnj2oIDFQAAAAAdAAAAABAE'
  },
  { 
    name : 'banana',
    components: ['xabu', 'capa'],
    desc : 'essa eh a garra do dagrao',
    photo : 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2FXabuSC%2F&psig=AOvVaw0xYbckLntI7dUk3Gf_BaAD&ust=1700851356300000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLDdipnj2oIDFQAAAAAdAAAAABAE'
  },
  { 
    name : 'banana',
    components: ['xabu', 'capa'],
    desc : 'essa eh a garra do dagrao',
    photo : 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2FXabuSC%2F&psig=AOvVaw0xYbckLntI7dUk3Gf_BaAD&ust=1700851356300000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLDdipnj2oIDFQAAAAAdAAAAABAE'
  },
  { 
    name : 'banana',
    components: ['xabu', 'capa'],
    desc : 'essa eh a garra do dagrao',
    photo : 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2FXabuSC%2F&psig=AOvVaw0xYbckLntI7dUk3Gf_BaAD&ust=1700851356300000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLDdipnj2oIDFQAAAAAdAAAAABAE'
  },
  {
    name : 'garra',
    components: ['xabu', 'capa'],
    desc : 'essa eh a garra do dagrao',
    photo : 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2FXabuSC%2F&psig=AOvVaw0xYbckLntI7dUk3Gf_BaAD&ust=1700851356300000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLDdipnj2oIDFQAAAAAdAAAAABAE'
  },
  {  
    name : 'xisde',
    components: ['xabu', 'capa'],
    desc : 'essa eh a garra do dagrao',
    photo : 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2FXabuSC%2F&psig=AOvVaw0xYbckLntI7dUk3Gf_BaAD&ust=1700851356300000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLDdipnj2oIDFQAAAAAdAAAAABAE'
  },
  { 
    name : 'banana',
    components: ['xabu', 'capa'],
    desc : 'essa eh a garra do dagrao',
    photo : 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2FXabuSC%2F&psig=AOvVaw0xYbckLntI7dUk3Gf_BaAD&ust=1700851356300000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLDdipnj2oIDFQAAAAAdAAAAABAE'
  },
  { 
    name : 'banana',
    components: ['xabu', 'capa'],
    desc : 'essa eh a garra do dagrao',
    photo : 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2FXabuSC%2F&psig=AOvVaw0xYbckLntI7dUk3Gf_BaAD&ust=1700851356300000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLDdipnj2oIDFQAAAAAdAAAAABAE'
  },
  { 
    name : 'banana',
    components: ['xabu', 'capa'],
    desc : 'essa eh a garra do dagrao',
    photo : 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2FXabuSC%2F&psig=AOvVaw0xYbckLntI7dUk3Gf_BaAD&ust=1700851356300000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLDdipnj2oIDFQAAAAAdAAAAABAE'
  },
  { 
    name : 'banana',
    components: ['xabu', 'capa'],
    desc : 'essa eh a garra do dagrao',
    photo : 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2FXabuSC%2F&psig=AOvVaw0xYbckLntI7dUk3Gf_BaAD&ust=1700851356300000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLDdipnj2oIDFQAAAAAdAAAAABAE'
  },
  { 
    name : 'banana',
    components: ['xabu', 'capa'],
    desc : 'essa eh a garra do dagrao',
    photo : 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2FXabuSC%2F&psig=AOvVaw0xYbckLntI7dUk3Gf_BaAD&ust=1700851356300000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLDdipnj2oIDFQAAAAAdAAAAABAE'
  },
  { 
    name : 'banana',
    components: ['xabu', 'capa'],
    desc : 'essa eh a garra do dagrao',
    photo : 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2FXabuSC%2F&psig=AOvVaw0xYbckLntI7dUk3Gf_BaAD&ust=1700851356300000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLDdipnj2oIDFQAAAAAdAAAAABAE'
  },
  {
    name : 'garra',
    components: ['xabu', 'capa'],
    desc : 'essa eh a garra do dagrao',
    photo : 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2FXabuSC%2F&psig=AOvVaw0xYbckLntI7dUk3Gf_BaAD&ust=1700851356300000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLDdipnj2oIDFQAAAAAdAAAAABAE'
  },
  {  
    name : 'xisde',
    components: ['xabu', 'capa'],
    desc : 'essa eh a garra do dagrao',
    photo : 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2FXabuSC%2F&psig=AOvVaw0xYbckLntI7dUk3Gf_BaAD&ust=1700851356300000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLDdipnj2oIDFQAAAAAdAAAAABAE'
  },
  { 
    name : 'banana',
    components: ['xabu', 'capa'],
    desc : 'essa eh a garra do dagrao',
    photo : 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2FXabuSC%2F&psig=AOvVaw0xYbckLntI7dUk3Gf_BaAD&ust=1700851356300000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLDdipnj2oIDFQAAAAAdAAAAABAE'
  },
  { 
    name : 'banana',
    components: ['xabu', 'capa'],
    desc : 'essa eh a garra do dagrao',
    photo : 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2FXabuSC%2F&psig=AOvVaw0xYbckLntI7dUk3Gf_BaAD&ust=1700851356300000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLDdipnj2oIDFQAAAAAdAAAAABAE'
  },
  { 
    name : 'banana',
    components: ['xabu', 'capa'],
    desc : 'essa eh a garra do dagrao',
    photo : 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2FXabuSC%2F&psig=AOvVaw0xYbckLntI7dUk3Gf_BaAD&ust=1700851356300000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLDdipnj2oIDFQAAAAAdAAAAABAE'
  },
  { 
    name : 'banana',
    components: ['xabu', 'capa'],
    desc : 'essa eh a garra do dagrao',
    photo : 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2FXabuSC%2F&psig=AOvVaw0xYbckLntI7dUk3Gf_BaAD&ust=1700851356300000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLDdipnj2oIDFQAAAAAdAAAAABAE'
  },
  { 
    name : 'banana',
    components: ['xabu', 'capa'],
    desc : 'essa eh a garra do dagrao',
    photo : 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2FXabuSC%2F&psig=AOvVaw0xYbckLntI7dUk3Gf_BaAD&ust=1700851356300000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLDdipnj2oIDFQAAAAAdAAAAABAE'
  },
  { 
    name : 'banana',
    components: ['xabu', 'capa'],
    desc : 'essa eh a garra do dagrao',
    photo : 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2FXabuSC%2F&psig=AOvVaw0xYbckLntI7dUk3Gf_BaAD&ust=1700851356300000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLDdipnj2oIDFQAAAAAdAAAAABAE'
  },
  {
    name : 'garra',
    components: ['xabu', 'capa'],
    desc : 'essa eh a garra do dagrao',
    photo : 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2FXabuSC%2F&psig=AOvVaw0xYbckLntI7dUk3Gf_BaAD&ust=1700851356300000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLDdipnj2oIDFQAAAAAdAAAAABAE'
  },
  {  
    name : 'xisde',
    components: ['xabu', 'capa'],
    desc : 'essa eh a garra do dagrao',
    photo : 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2FXabuSC%2F&psig=AOvVaw0xYbckLntI7dUk3Gf_BaAD&ust=1700851356300000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLDdipnj2oIDFQAAAAAdAAAAABAE'
  },
  { 
    name : 'banana',
    components: ['xabu', 'capa'],
    desc : 'essa eh a garra do dagrao',
    photo : 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2FXabuSC%2F&psig=AOvVaw0xYbckLntI7dUk3Gf_BaAD&ust=1700851356300000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLDdipnj2oIDFQAAAAAdAAAAABAE'
  },
  { 
    name : 'banana',
    components: ['xabu', 'capa'],
    desc : 'essa eh a garra do dagrao',
    photo : 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2FXabuSC%2F&psig=AOvVaw0xYbckLntI7dUk3Gf_BaAD&ust=1700851356300000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLDdipnj2oIDFQAAAAAdAAAAABAE'
  },
  { 
    name : 'banana',
    components: ['xabu', 'capa'],
    desc : 'essa eh a garra do dagrao',
    photo : 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2FXabuSC%2F&psig=AOvVaw0xYbckLntI7dUk3Gf_BaAD&ust=1700851356300000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLDdipnj2oIDFQAAAAAdAAAAABAE'
  },
  { 
    name : 'banana',
    components: ['xabu', 'capa'],
    desc : 'essa eh a garra do dagrao',
    photo : 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2FXabuSC%2F&psig=AOvVaw0xYbckLntI7dUk3Gf_BaAD&ust=1700851356300000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLDdipnj2oIDFQAAAAAdAAAAABAE'
  },
  { 
    name : 'banana',
    components: ['xabu', 'capa'],
    desc : 'essa eh a garra do dagrao',
    photo : 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2FXabuSC%2F&psig=AOvVaw0xYbckLntI7dUk3Gf_BaAD&ust=1700851356300000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLDdipnj2oIDFQAAAAAdAAAAABAE'
  },
  { 
    name : 'banana',
    components: ['xabu', 'capa'],
    desc : 'essa eh a garra do dagrao',
    photo : 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2FXabuSC%2F&psig=AOvVaw0xYbckLntI7dUk3Gf_BaAD&ust=1700851356300000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLDdipnj2oIDFQAAAAAdAAAAABAE'
  },
  {
    name : 'garra',
    components: ['xabu', 'capa'],
    desc : 'essa eh a garra do dagrao',
    photo : 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2FXabuSC%2F&psig=AOvVaw0xYbckLntI7dUk3Gf_BaAD&ust=1700851356300000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLDdipnj2oIDFQAAAAAdAAAAABAE'
  },
  {  
    name : 'xisde',
    components: ['xabu', 'capa'],
    desc : 'essa eh a garra do dagrao',
    photo : 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2FXabuSC%2F&psig=AOvVaw0xYbckLntI7dUk3Gf_BaAD&ust=1700851356300000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLDdipnj2oIDFQAAAAAdAAAAABAE'
  },
  { 
    name : 'banana',
    components: ['xabu', 'capa'],
    desc : 'essa eh a garra do dagrao',
    photo : 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2FXabuSC%2F&psig=AOvVaw0xYbckLntI7dUk3Gf_BaAD&ust=1700851356300000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLDdipnj2oIDFQAAAAAdAAAAABAE'
  },
  { 
    name : 'banana',
    components: ['xabu', 'capa'],
    desc : 'essa eh a garra do dagrao',
    photo : 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2FXabuSC%2F&psig=AOvVaw0xYbckLntI7dUk3Gf_BaAD&ust=1700851356300000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLDdipnj2oIDFQAAAAAdAAAAABAE'
  },
  { 
    name : 'banana',
    components: ['xabu', 'capa'],
    desc : 'essa eh a garra do dagrao',
    photo : 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2FXabuSC%2F&psig=AOvVaw0xYbckLntI7dUk3Gf_BaAD&ust=1700851356300000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLDdipnj2oIDFQAAAAAdAAAAABAE'
  },
  { 
    name : 'banana',
    components: ['xabu', 'capa'],
    desc : 'essa eh a garra do dagrao',
    photo : 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2FXabuSC%2F&psig=AOvVaw0xYbckLntI7dUk3Gf_BaAD&ust=1700851356300000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLDdipnj2oIDFQAAAAAdAAAAABAE'
  },
  { 
    name : 'banana',
    components: ['xabu', 'capa'],
    desc : 'essa eh a garra do dagrao',
    photo : 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2FXabuSC%2F&psig=AOvVaw0xYbckLntI7dUk3Gf_BaAD&ust=1700851356300000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLDdipnj2oIDFQAAAAAdAAAAABAE'
  },
  { 
    name : 'banana',
    components: ['xabu', 'capa'],
    desc : 'essa eh a garra do dagrao',
    photo : 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2FXabuSC%2F&psig=AOvVaw0xYbckLntI7dUk3Gf_BaAD&ust=1700851356300000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLDdipnj2oIDFQAAAAAdAAAAABAE'
  },
]

const renderItems = () => {
    return items.map((i) => mapper(i))
  }

  const mapper = (item) => {
      return (
        <View style={
          {
            width: 45,
            height: 45,
            backgroundColor: 'red',
            borderRadius: 5,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>

          <Image style={{width: '100%', height: '100%'}} source={{ uri: item.photo }}/>

        </View>
      )
  }

  const handleBackdrop = (event) => {
    props.setmodalIsItemsVisible(false)
    const x = event.clientX
    const y = event.clientY
    
    if (x < 60 && y <= 200)
      props.setChamps(true)
  }

  return (  
  <Modal
    onBackdropPress = {handleBackdrop}
    isVisible={props.modalItemsVisible}
    animationIn={'slideInLeft'}
    animationOut={'slideOutLeft'}
    backdropOpacity={0}
    style={{ marginLeft: '7vw' }}>
    <View style={styles.modalView}>
      <View style={styles.itemsModal}>
        <View style={styles.allItems}>
          {renderItems()}
        </View>
      </View>
      <View style={styles.button}><TouchableOpacity style={styles.close} onPress={() => props.setmodalIsItemsVisible(false)}><Text>X</Text></TouchableOpacity></View>
    </View>
  </Modal>
  );
}

const styles = StyleSheet.create({
  modalView: {
    width: '80vw',
    height: '100vh',
    backgroundColor: '#0E2D54',
    borderTopEndRadius: 15,
    borderBottomEndRadius: 15,
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
  },
  itemsModal: {
    backgroundColor: 'white',
    width: '95%',
    height: '95%',
    display: 'flex',
    alignItems:'center',
    flexDirection: 'row',
    padding: 5
    
  },
  allItems: {
    width: "100%",
    height: "fit-content",
    gap: 10,
    display: 'flex',
    justifyContent: 'center',
    flexWrap:"wrap",
    flexDirection: 'row',
  },
  button: {
    width: '5%',
    height: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 5
  },
  close: {
    width: 25,
    height: 25,
    backgroundColor: "red",
    color: "black",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '50%'
  },
});
