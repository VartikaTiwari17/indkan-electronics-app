import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { colors } from '../theme';

const menu = [
  { label: '📦 Browse Products', screen: 'Products' },
  { label: '🧾 Bulk Order Request', screen: 'BulkOrder' },
  { label: '🌍 Trade Enquiry', screen: 'Enquiry' },
  { label: '📞 Contact Us', screen: 'Contact' }
];

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView style={{ backgroundColor: colors.light }}>
      <View style={s.hero}>
        <Text style={s.title}>Global Electronics Import & Export</Text>
        <Text style={s.sub}>Bulk supply · Compliant logistics · Worldwide delivery</Text>
      </View>
      <View style={{ padding: 16 }}>
        {menu.map(m => (
          <TouchableOpacity key={m.screen} style={s.btn} onPress={() => navigation.navigate(m.screen)}>
            <Text style={s.btnText}>{m.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const s = StyleSheet.create({
  hero: { backgroundColor: colors.primary, padding: 30, paddingVertical: 50 },
  title: { color: '#fff', fontSize: 26, fontWeight: '800' },
  sub: { color: '#cbd5e1', marginTop: 8 },
  btn: { backgroundColor: '#fff', padding: 18, borderRadius: 12, marginBottom: 12, elevation: 2, borderLeftWidth: 5, borderLeftColor: colors.accent },
  btnText: { fontSize: 16, fontWeight: '600', color: colors.primary }
});