import React, { useState } from 'react';
import { ScrollView, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { colors, FORM_ENDPOINT } from '../theme';

const CONFIG = {
  bulk: {
    subject: 'New Bulk Order Request (App)',
    fields: [
      ['name', 'Full Name'], ['company', 'Company Name'], ['email', 'Business Email'],
      ['phone', 'Phone / WhatsApp'], ['product', 'Product Name'], ['quantity', 'Quantity'],
      ['country', 'Destination Country'], ['message', 'Additional requirements']
    ]
  },
  enquiry: {
    subject: 'New Trade Enquiry (App)',
    fields: [
      ['name', 'Full Name'], ['company', 'Company Name'], ['email', 'Email'],
      ['country', 'Your Country'], ['trade_type', 'Import / Export / Both'],
      ['incoterm', 'Incoterm (FOB, CIF, EXW...)'], ['message', 'Describe your requirement']
    ]
  }
};

export default function FormScreen({ route }) {
  const { type, product } = route.params;
  const cfg = CONFIG[type];
  const [values, setValues] = useState({ product: product || '' });
  const [loading, setLoading] = useState(false);

  const submit = async () => {
    if (!values.name || !values.email) return Alert.alert('Please fill in name and email.');
    setLoading(true);
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ _subject: cfg.subject, ...values })
      });
      if (res.ok) { Alert.alert('Thank you!', 'Our team will contact you shortly.'); setValues({}); }
      else Alert.alert('Error', 'Could not send. Try again.');
    } catch { Alert.alert('Network error', 'Please try again.'); }
    setLoading(false);
  };

  return (
    <ScrollView style={{ backgroundColor: colors.light }} contentContainerStyle={{ padding: 16 }}>
      {cfg.fields.map(([key, label]) => (
        <TextInput
          key={key}
          style={[s.input, key === 'message' && { height: 100, textAlignVertical: 'top' }]}
          placeholder={label}
          multiline={key === 'message'}
          keyboardType={key === 'email' ? 'email-address' : key === 'quantity' || key === 'phone' ? 'numeric' : 'default'}
          autoCapitalize={key === 'email' ? 'none' : 'sentences'}
          value={values[key] || ''}
          onChangeText={t => setValues({ ...values, [key]: t })}
        />
      ))}
      <TouchableOpacity style={s.btn} onPress={submit} disabled={loading}>
        <Text style={{ fontWeight: '700' }}>{loading ? 'Sending...' : 'Submit'}</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const s = StyleSheet.create({
  input: { backgroundColor: '#fff', padding: 14, borderRadius: 10, marginBottom: 12, borderWidth: 1, borderColor: '#cbd5e1' },
  btn: { backgroundColor: colors.accent, padding: 16, borderRadius: 10, alignItems: 'center' }
});