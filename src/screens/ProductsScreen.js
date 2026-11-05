import React, { useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, TextInput, ScrollView, StyleSheet } from 'react-native';
import { products, categories } from '../data/products';
import { colors } from '../theme';

export default function ProductsScreen({ navigation }) {
  const [cat, setCat] = useState('All');
  const [q, setQ] = useState('');

  const list = products.filter(p =>
    (cat === 'All' || p.category === cat) && p.name.toLowerCase().includes(q.toLowerCase())
  );

  return (
    <View style={{ flex: 1, backgroundColor: colors.light }}>
      <TextInput style={s.search} placeholder="Search products..." value={q} onChangeText={setQ} />
      <View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ paddingLeft: 12 }}>
          {categories.map(c => (
            <TouchableOpacity key={c} onPress={() => setCat(c)} style={[s.chip, cat === c && s.chipOn]}>
              <Text style={{ color: cat === c ? '#fff' : colors.primary }}>{c}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      <FlatList
        data={list}
        keyExtractor={i => String(i.id)}
        contentContainerStyle={{ padding: 12 }}
        renderItem={({ item }) => (
          <TouchableOpacity style={s.card} onPress={() => navigation.navigate('ProductDetail', { product: item })}>
            <Image source={{ uri: item.image }} style={s.img} />
            <View style={{ padding: 12 }}>
              <Text style={s.cat}>{item.category}</Text>
              <Text style={s.name}>{item.name}</Text>
              <Text numberOfLines={2}>{item.description}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const s = StyleSheet.create({
  search: { backgroundColor: '#fff', margin: 12, padding: 12, borderRadius: 10, borderWidth: 1, borderColor: '#cbd5e1' },
  chip: { paddingHorizontal: 14, paddingVertical: 8, borderRadius: 20, backgroundColor: '#fff', marginRight: 8, borderWidth: 1, borderColor: colors.primary },
  chipOn: { backgroundColor: colors.primary },
  card: { backgroundColor: '#fff', borderRadius: 12, marginBottom: 14, overflow: 'hidden', elevation: 3 },
  img: { height: 160, width: '100%' },
  cat: { color: colors.accent, fontSize: 12, fontWeight: '700' },
  name: { fontSize: 17, fontWeight: '700', color: colors.primary, marginVertical: 4 }
});