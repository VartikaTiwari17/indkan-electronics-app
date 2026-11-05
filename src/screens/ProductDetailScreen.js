import React from 'react';
import { ScrollView, View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { colors } from '../theme';

export default function ProductDetailScreen({ route, navigation }) {
  const { product: p } = route.params;
  return (
    <ScrollView style={{ backgroundColor: '#fff' }}>
      <Image source={{ uri: p.image }} style={{ height: 240, width: '100%' }} />
      <View style={{ padding: 16 }}>
        <Text style={s.cat}>{p.category}</Text>
        <Text style={s.name}>{p.name}</Text>
        <Text style={{ marginBottom: 16 }}>{p.description}</Text>
        <Text style={s.h}>Specifications</Text>
        {Object.entries(p.specs).map(([k, v]) => (
          <View key={k} style={s.row}>
            <Text style={s.key}>{k}</Text>
            <Text style={{ flex: 1 }}>{v}</Text>
          </View>
        ))}
        <TouchableOpacity style={s.btn} onPress={() => navigation.navigate('BulkOrder', { product: p.name })}>
          <Text style={{ fontWeight: '700' }}>Request Bulk Quote</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const s = StyleSheet.create({
  cat: { color: colors.accent, fontWeight: '700' },
  name: { fontSize: 24, fontWeight: '800', color: colors.primary, marginVertical: 6 },
  h: { fontSize: 18, fontWeight: '700', color: colors.primary, marginBottom: 8 },
  row: { flexDirection: 'row', paddingVertical: 8, borderBottomWidth: 1, borderBottomColor: '#e2e8f0' },
  key: { width: 120, fontWeight: '600', color: colors.primary },
  btn: { backgroundColor: colors.accent, padding: 16, borderRadius: 10, alignItems: 'center', marginTop: 24 }
});