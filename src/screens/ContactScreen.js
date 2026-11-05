import React from 'react';
import { View, Text, TouchableOpacity, Linking, StyleSheet } from 'react-native';
import { colors } from '../theme';

const items = [
  ['📧 Email Us', 'mailto:info@indkanworldwideexim.in'],
  ['📞 Call Us', 'tel:+91XXXXXXXXXX'],
  ['💬 WhatsApp', 'https://wa.me/91XXXXXXXXXX'],
  ['🌐 Visit Website', 'https://indkanworldwideexim.in'],
  ['📸 Instagram', 'https://www.instagram.com/indkankolkata'],
  ['▶️ YouTube', 'https://www.youtube.com/@indkanworldwideeximkolkata']
];

export default function ContactScreen() {
  return (
    <View style={{ flex: 1, padding: 16, backgroundColor: colors.light }}>
      <Text style={s.h}>INDKAN World Wide Exim Pvt. Ltd.</Text>
      <Text style={{ marginBottom: 16 }}>Kolkata, India</Text>
      {items.map(([label, url]) => (
        <TouchableOpacity key={label} style={s.btn} onPress={() => Linking.openURL(url)}>
          <Text style={{ fontSize: 16, fontWeight: '600', color: colors.primary }}>{label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const s = StyleSheet.create({
  h: { fontSize: 22, fontWeight: '800', color: colors.primary },
  btn: { backgroundColor: '#fff', padding: 16, borderRadius: 10, marginBottom: 10, elevation: 2 }
});