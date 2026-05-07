"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent } from '@/components/ui/card';
import { useMemo, useState } from 'react';
import Image from 'next/image';
import type { Doctor } from '@/types/doctor';

// Doctor data grouped by specialization
export const doctors: Record<string, Doctor[]> = {
    'মেডিসিন বিশেষজ্ঞ': [
    {
      name: 'ডা. রুম্মানা সিরাজ',
      description: 'এমবিবিএস (ডিএমসি), এফসিপিএস (মেডিসিন), বিসিএস (স্বাস্থ্য)\nসহকারী অধ্যাপক (মেডিসিন)\nমুগদা মেডিকেল কলেজ হাসপাতাল, মুগদা, ঢাকা\nকনসালটেন্ট, আশ্-শাফি মেডিকেল সেন্টার',
      time: '',
    },
    {
      name: 'ডা. এম এ মোহাইমেন ইবনে মোস্তাফিজ',
      description: 'এমবিবিএস (এএফএমসি, ঢাকা), বিসিএস (স্বাস্থ্য), এফসিপিএস (মেডিসিন) শেষ পর্ব\nকুর্মিটোলা জেনারেল হাসপাতাল, ঢাকা\nকনসালটেন্ট, আশ্-শাফি মেডিকেল সেন্টার',
      time: '',
    },
  ],
  'মেডিসিন ও ডায়াবেটিস বিশেষজ্ঞ': [
    {
      name: 'ডা. নাহিদ ফারহানা চৌধুরী',
      description: 'এমবিবিএস (ঢাকা) এফসিজিপি, সিসিডি (বারডেম), ডিএমইউ \nকনসালটেন্ট\nফ্যামিলি মেডিসিন ও ডায়াবেটিস বিশেষজ্ঞ\nপ্রাক্তন ক্লিনিক ইনচার্জ, সূর্যের হাসি ক্লিনিক\nকনসালটেন্ট, আশ্-শাফি মেডিকেল সেন্টার',
      time: '',
    },
    {
      name: 'ডা. মোঃ তানজীর আনোয়ার',
      description: 'এমবিবিএস, বিসিএস (স্বাস্থ্য), এফসিজিপি সিসিডি (বারডেম), সি-কার্ড (ন্যাশনাল হার্ট ফাউন্ডেশন) সিডিডি (আইসিডিডিআরবি) এমডি (ইন্টারনাল মেডিসিন) (অন কোর্স)\nজনস্বাস্থ্য পুষ্টি প্রতিষ্ঠান, ঢাকা\nকনসালটেন্ট, আশ্-শাফি মেডিকেল সেন্টার',
      time: 'বিকেল ৫টা থেকে সন্ধ্যা ৭টা (শুক্রবার বন্ধ)',
    },
    {
      name: 'ডা. মুহম্মদ যুবায়ের চৌধুরী',
      description: 'এমবিবিএস, সিসিডি (বারডেম), এমপিএইচ \nকনসালটেন্ট পাবলিক হেলথ্ এবং ডায়াবেটোলজিস্ট\n ল্যাব এইড কার্ডিয়াক হাসপাতাল\nকনসালটেন্ট, আশ্-শাফি মেডিকেল সেন্টার',
      time: 'সকাল ১০টা থেকে দুপুর ১টা (শনি, রবি, মঙ্গল ও বৃহস্পতিবার)',
    },
  ],
     'মেডিসিন ডায়াবেটিস ও কিডনি রোগে বিশেষজ্ঞ': [
    {
      name: 'ডা. তাসনীম আলম',
      description: 'এমবিবিএস, সিসিডি (বারডেম), এফসিপিএস (মেডিসিন) শেষ পর্ব , এমডি (নেফ্রোলজি) কোর্স, মেডিসিন ডায়াবেটিস ও কিডনি রোগে বিশেষ প্রশিক্ষণপ্রাপ্ত\nকনসালটেন্ট, আশ্-শাফি মেডিকেল সেন্টার',
      time: '',
    },
  ],
  'পরিপাকতন্ত্র ও লিভার রোগ বিশেষজ্ঞ': [
    {
      name: 'ডা. আল মাহমুদ এ্যাপোলো',
      description: 'এমবিবিএস (ডিএমসি), বিসিএস (স্বাস্থ্য) এমডি (গ্যাস্ট্রোএন্টোরোলজী)\nপরিপাকতন্ত্র ও লিভার রোগ বিশেষজ্ঞ কনসালটেন্ট, গ্যাস্ট্রোএন্টোরোলজী\nজাতীয় গ্যাস্ট্রোলিভার ইনস্টিটিউট ও হাসপাতাল, মহাখালী, ঢাকা\nকনসালটেন্ট, আশ্-শাফি মেডিকেল সেন্টার',
      time: 'রাত ৮টা থেকে রাত ৯:৩০মি: (রবি, মঙ্গল ও বৃহস্পতিবার)',
    },
  ],
  'প্রসূতি ও স্ত্রীরোগ বিশেষজ্ঞ': [
    {
      name: 'ডা. ফারহানা মিথিলা',
      description: 'এমবিবিএস, এফসিপিএস প্রসূতি ও স্ত্রীরোগ বিশেষজ্ঞ \nল্যাপারোস্কোপিক সার্জন\n বন্ধ্যাত্ব বিষয়ে উচ্চতর প্রশিক্ষণপ্রাপ্ত\nঢাকা মেডিকেল কলেজ হাসপাতাল\nকনসালটেন্ট, আশ্-শাফি মেডিকেল সেন্টার',
      time: 'সন্ধ্যা ৭টা থেকে রাত ৯টা (শনি, রবি, মঙ্গল ও বৃহস্পতিবার)',
    },
    {
      name: 'ডা. মোরশেদা পারভীন',
      description: 'এমবিবিএস, এফসিপিএস (অবস্ এন্ড গাইনী) \nপ্রসূতি ও স্ত্রীরোগ এবং বন্ধ্যাত্বরোগ বিশেষজ্ঞ\nকনসালটেন্ট, আশ্-শাফি মেডিকেল সেন্টার',
      time: 'সকাল ১০টা-দুপুর ১২টা (রবি, মঙ্গল ও বৃহস্পতিবার)',
    },
    {
      name: 'ডা. লুসিয়াত জাহান',
      description: 'এমবিবিএস (আরইউ), ডিএমইউ, সিএমইউ, প্রাক্তন-ক্লিনিক ম্যানেজার (ইউপিএইচসিএসডিপি-২)\n(আরবান প্রাইমারী হেলথ কেয়ার সার্ভিসেস ডেলিভারি প্রোজেক্ট-২)\nপ্রাক্তন-মেডিকেল অফিসার\nসূর্যের হাসি ক্লিনিক\nকনসালটেন্ট, আশ্-শাফি মেডিকেল সেন্টার',
      time: 'প্রতিদিন সকাল ১০ টা-দুপুর ১ টা পর্যন্ত (শুক্রবার বন্ধ)',
    },
    {
      name: 'ডা. ফারহানা ফেরদৌস',
      description: 'এমবিবিএস, বিসিএস (স্বাস্থ্য), ডিজিও (গাইনি-অবস্‌), এফসিপিএস (গাইনি-অবস্‌, এফপি)\nশহীদ সোহরাওয়ার্দী মেডিকেল কলেজ ও হাসপাতাল,শের-ই-বাংলা নগর, ঢাকা\nকনসালটেন্ট, আশ্-শাফি মেডিকেল সেন্টার',
      time: 'সন্ধ্যা ৬ টা থেকে রাত ৮ টা (সোম, মঙ্গল ও বুধবার)',
    },
  ],
  'সনোলজিস্ট': [
    {
      name: 'ডা. জিনিয়া আফরিন খান',
      description: 'এমবিবিএস (ঢাকা), সিসিডি (বারডেম), ডিএমইডি \nসহকারী অধ্যাপক, ন্যাশনাল ইনস্টিটিউট অব নিউক্লিয়ার মেডিসিন এন্ড এ্যালাইড সাইন্সেস, বাংলাদেশ পরমাণু শক্তি কমিশন\nকনসালটেন্ট সোনোলজিস্ট, আশ্-শাফি মেডিকেল সেন্টার',
      time: 'সন্ধ্যা ৭ টা থেকে রাত ৯ টা (রবি, সোম ও মঙ্গলবার)',
    },
      {
      name: 'ডা. বুসরা এনায়েত করিম',
      description: 'এমবিবিএস (ডিইউ), সিএমইউ, ডিএমইউ\nস্পেশাল ট্রেনিং অন এনোমালি স্ক্যান এন্ড ভাসকুলার কালার ডপলার \nকনসালটেন্ট সোনোলজিস্ট, আশ্-শাফি মেডিকেল সেন্টার',
      time: 'প্রতিদিন সকাল ৯ টা থেকে ১ টা পর্যন্ত',
    },
      {
      name: 'ডা. শাহানা আক্তার',
      description: 'এমবিবিএস, ডিডিএমইডি, এমডিএমইডি, সিসিডি, অ্যাডভান্সড ট্রেনিং অন এনোমালি স্ক্যান টিএফএ, ব্রেস্ট, থাইরয়েড ও এমএসকে\nকনসালট্যান্ট সোনোলজিস্ট আশ্-শাফি মেডিকেল সেন্টার',
      time: 'সন্ধ্যা ৬ টা থেকে রাত ৯ টা (শনি, বুধ ও বৃহস্পতিবার)',
    },
      {
      name: 'ডা.ফারজানা রহমান',
      description: 'এমবিবিএস, ডিএমইডি, ডিডিএমইডি, সিসিডি, কালার ডপলার, ফিটাল এনোমালি ও টিএফএ (প্রশিক্ষণপ্রাপ্ত)\nকনসালট্যান্ট সোনোলজিস্ট, আশ-শাফি মেডিকেল সেন্টার',
      time: '',
    },
  ],
      'চর্ম, যৌন ও এলার্জি রোগ বিশেষজ্ঞ': [
    {
      name: 'ডা.বাবু রাম মন্ডল',
      description: 'এমবিবিএস (ডিএমসি), বিসিএস (স্বাস্থ্য) এমডি (ডার্মাটোলজী) কোর্স\nবাংলাদেশ মেডিকেল বিশ্ববিদ্যালয়। (পিজি হাসপাতাল)\nকনসালটেন্ট, আশ্-শাফি মেডিকেল সেন্টার',
      time: 'বিকেল ৫টা থেকে রাত ৮টা (শুক্রবার বন্ধ)',
    },
  ],
  

  'জেনারেল, ল্যাপারোস্কোপ, হার্নিয়া, ব্রেস্ট এন্ড ট্রমা সার্জারী বিশেষজ্ঞ': [
    {
      name: 'ডা. মোস্তাক আহমেদ',
      description: 'এমবিবিএস, এফসিপিএস (সার্জারী) \nজেনারেল, ল্যাপারোস্কোপ, হার্নিয়া, ব্রেস্ট এন্ড ট্রমা সার্জারী বিশেষজ্ঞ,ঢাকা মেডিকেল কলেজ হাসপাতাল\nকনসালটেন্ট, আশ্-শাফি মেডিকেল সেন্টার',
      time: 'সন্ধ্যা ৭টা থেকে রাত ৯টা (রবি, মঙ্গল ও বৃহস্পতিবার)',
    },
   
  ],
    'জেনারেল, কলোরেক্টাল, ব্রেষ্ট, ইউরোলজী ও ক্যান্সার বিশেষজ্ঞ ল্যাপারোস্কপিক সার্জন': [
    {
      name: 'ডা. মোঃ মাহমুদুল হাসান (মিঠু)',
      description: 'এমবিবিএস, বিসিএস (স্বাস্থ্য), এফসিপিএস (সার্জারি)\nএফসিপিএস (সার্জিক্যাল অনকোলজি) কোর্স কনসালটেন্ট (সার্জারী)\nজেনারেল, কলোরেক্টাল, ব্রেষ্ট, ইউরোলজী ও ক্যান্সার বিশেষজ্ঞ ল্যাপারোস্কপিক সার্জন\nজাতীয় ক্যান্সার গবেষণা ইনস্টিটিউট ও হাসপাতাল, মহাখালী, ঢাকা\nকনসালটেন্ট, আশ্-শাফি মেডিকেল সেন্টার',
      time: '',
    },
  ],
  'হৃদরোগ ও মেডিসিন বিশেষজ্ঞ': [
    {
      name: 'ডা.মাহমুদ হাসান',
      description: 'এমবিবিএস, বিসিএস (স্বাস্থ্য), এমডি কার্ডিওলজি (অন কোর্স), পিজিটি (মেডিসিন) \nজাতীয় হৃদরোগ ইনস্টিটিউট, ঢাকা\nকনসালটেন্ট, আশ্-শাফি মেডিকেল সেন্টার',
      time: 'সন্ধ্যা ৬টা থেকে রাত ৮টা (শনি, রবি, মঙ্গল ও বুধবার)',
    },
     {
      name: 'ডা.মোহাম্মদ ইব্রাহীম আদহাম',
      description: 'এমবিবিএস (ডিএমসি), এমএস রেসিডেন্ট (সিভিটিএস, এনএইচএফএইচ এন্ড আরআই) এফসিপিএস পার্ট-২ ট্রেইনি (সার্জারী), এমআরসিএস ওএসসিই (ইডেনবার্গ), সিসিডি (বারডেম) বিশেষ প্রশিক্ষণপ্রাপ্ত ইকো, ফুটকেয়ার ও ইনজুরি ব্যবস্থাপনা, প্রাক্তন এসআরএমও, ল্যাব এইড কার্ডিয়াক হাসপাতাল\nকনসালটেন্ট, আশ্-শাফি মেডিকেল সেন্টার',
      time: 'বিকেল ৪টা-রাত ৯টা (রবি, মঙ্গল, বৃহস্পতি ও শুক্রবার)',
    },
       {
      name: 'ডা. ফারিয়া রহমান',
      description: 'এমবিবিএস (ঢাকা), এমডি (কার্ডিওলজি, ন্যাশনাল হার্ট ফাউন্ডেশন), এফসিপিএস (মেডিসিন) শেষ পর্ব\nকনসালটেন্ট, কার্ডিওলজি, জাতীয় হৃদরোগ ইনস্টিটিউট ও হাসপাতাল\nকনসালটেন্ট, আশ্-শাফি মেডিকেল সেন্টার',
      time: '',
    },
  ],
    'নবজাতক, শিশু ও কিশোর রোগ বিশেষজ্ঞ': [
    {
      name: 'ডা.মোঃ মাজহারুল হক',
      description: 'এমবিবিএস (সিলেট মেডিকেল কলেজ) ডিসিএইচ (ঢাকা শিশু হাসপাতাল, শ্যামলী) পিজিপিএন (বোষ্টন ইউনিভার্সিটি) ফেলোশিপ, শিশু পুষ্টি (আমেরিকা)\nকনসালটেন্ট, পেডিয়াট্রিক্স ও এনআইসিইউ, ওজিএসবি হাসপাতাল\nকনসালটেন্ট, আশ্-শাফি মেডিকেল সেন্টার',
      time: 'রাত ৮টা থেকে ১০টা পর্যন্ত (শনি, সোম ও বুধবার)',
    },
     {
      name: 'ডা. মোহাম্মদ মাসুদ রানা',
      description: 'এমবিবিএস (ঢাকা), পিজিটি (চাইল্ড মেডিসিন) পিজিপিএন পোষ্ট গ্রাজুয়েশন ইন পেডিয়াট্রিক নিউট্রিশন, সিসিডি (হার্ট ফাউন্ডেশন), সিসিডি (বারডেম) \nশিশু চিকিৎসক ও জেনারেল,ফিজিশিয়ান প্রাক্তন সিনিয়র মেডিকেল অফিসার \nইনস্টিটিউট অব চাইল্ড হেলথ্ এন্ড শিশু ফাউন্ডেশন হাসপাতাল\nকনসালটেন্ট, আশ্-শাফি মেডিকেল সেন্টার',
      time: 'সকাল ৯টা থেকে দুপুর ১১টা (শুক্রবার বন্ধ)',
    },
    {
      name: 'প্রফেসর চৌধুরী মোহাঃ হায়দার আলী',
      description: 'এমবিবিএস (ডিএমসি) ডিসিএইচ (Dublin), আরসিপিএন্ডএস (Ireland), এমডি (শিশু-বাংলাদেশ শিশু ইনস্টিটিউট)\n অধ্যাপক ও বিভাগীয় প্রধান, শিশু বিভাগ, ঢাকা শিশু হাসপাতাল\n প্রিন্সিপ্যাল (প্রাক্তন) আশিয়ান মেডিকেল কলেজ\n কন্সালটেন্ট (প্রাক্তন) ইউনাইটেড হাসপাতাল\nকনসালটেন্ট, আশ্-শাফি মেডিকেল সেন্টার',
      time: 'সন্ধ্যা ৬টা থেকে ৮টা পর্যন্ত (রবি, মঙ্গল, ও বৃহস্পতিবার)'
    },
      {
      name: 'ডা. নাজমা খাতুন',
      description: 'এমবিবিএস (ময়মনসিংহ মেডিকেল কলেজ), ডিসিএইচ (বি.এস.এম.এম.ইউ), এফসিপিএস (এফপি)\nচাইল্ড স্পেশালিস্ট, কনসালট্যান্ট, ডা. এম আর খান শিশু হাসপাতাল ও আইসিএইচ মিরপুর, ঢাকা\nকনসালটেন্ট, আশ্-শাফি মেডিকেল সেন্টার',
      time: 'প্রতিদিন সন্ধ্যা ৬ টা-রাত ৮ টা (শুক্রবার বন্ধ)'
    },
      {
      name: 'ডা. অন্তরা তালুকদার',
      description: 'এমবিবিএস (ঢাকা), ডিসিএইচ (বিএমইউ), এফসিপিএস (শিশু গ্যাস্ট্রো ও নিউট্রিশন) শেষ পর্ব\nবাংলাদেশ শিশু হাসপাতাল ও ইনস্টিটিউট\nকনসালটেন্ট, আশ্-শাফি মেডিকেল সেন্টার',
      time: 'সন্ধ্যা ৬ টা-রাত ৮ টা (শনি, সোম ও বুধবার)'
    },
    
  ],
    'অর্থোপেডিকস, ট্রমা ও স্পাইন বিশেষজ্ঞ ও সার্জন': [
    {
      name: 'ডা.নিবরাস ওয়াদুদ খান',
      description: 'এমবিবিএস (চট্টগ্রাম), এফসিপিএস পার্ট-১, অর্থোপেডিক সার্জারি, এমআরসিএস পার্ট-১ (ইংল্যান্ড) \nসার্জারী বিভাগ, ঢাকা মেডিকেল কলেজ হাসপাতাল\nকনসালটেন্ট, আশ্-শাফি মেডিকেল সেন্টার',
      time: 'রাত ৮টা থেকে রাত ১০টা (শনি, সোম ও বুধবার)',
    },
  ],
     'নাক কান গলা রোগ বিশেষজ্ঞ': [
    {
      name: 'ডা.রাহাত তানভীর আনোয়ার',
      description: 'এমবিবিএস (ডিএমসি), বিসিএস (স্বাস্থ্য), এমসিপিএস, এফসিপিএস \nনাক কান গলা রোগ বিশেষজ্ঞ, মাইক্রোস্কোপিক, এন্ডোস্কোপিক ও হেড নেক সার্জন \nজাতীয় নাক কান গলা ইনস্টিটিউট, তেজগাঁও, ঢাকা \nনাকের এন্ডোস্কোপিক সার্জারিতে উচ্চতর প্রশিক্ষণপ্রাপ্ত (চাংগী জেনারেল হাসপাতাল, সিঙ্গাপুর) কানের মাইক্রোসকপিক সার্জারিতে উচ্চতর প্রশিক্ষণপ্রাপ্ত\nকনসালটেন্ট, আশ্-শাফি মেডিকেল সেন্টার',
      time: 'বিকেল ৫:৩০মিঃ থেকে সন্ধ্যা ৭:৩০মি (শনি, সোম ও বুধবার)',
    },
  ],

   'ক্লিনিক্যাল প্যাথলজিস্ট': [
    {
      name: 'লেফটেন্যান্ট কর্নেল ডাঃ মোঃ মুখলেছুর রহমান খান (অব.)',
      description: 'এমবিবিএস (ঢাকা), এমসিপিএস (বিডি), ডিসিপি (বিএসএমএমইউ) \nপ্রাক্তন প্রধান, ক্লিনিকাল প্যাথলজি, এএফআইপি ঢাকা সেনানিবাস\nকনসালটেন্ট প্যাথলজিস্ট (আশ্-শাফি মেডিকেল সেন্টার)',
      time: '',
    },
  ],
   'মেডিসিন, বক্ষব্যাধি, অ্যাজমা, এলার্জি, শ্বাসকষ্ট ও যক্ষা রোগ বিশেষজ্ঞ': [
    {
      name: 'ডা. মোঃ আশরাফুল ইসলাম (সজিব)',
      description: 'এমবিবিএস, বিসিএস (স্বাস্থ্য সিসিডি, ডায়াবেটিস (বারডেম), এম ডি (বক্ষব্যাধি)\nজাতীয় বক্ষব্যাধি ইনস্টিটিউট ও হাসপাতাল মহাখালী, ঢাকা\nকনসালটেন্ট, আশ্-শাফি মেডিকেল সেন্টার',
      time: '',
    },
  ],
  'ইউরোলজি ও মেডিসিন বিশেষজ্ঞ': [
    {
      name: 'ডা. মাহমুদ হাসান',
      description: 'এমবিবিএস, বিসিএস (স্বাস্থ্য)\nএমডি কার্ডিওলজি (অন কোর্স), পিজিটি (মেডিসিন)\nজাতীয় ইউরোলজি ইনস্টিটিউট, ঢাকা\nকনসালটেন্ট, আশ্-শাফি মেডিকেল সেন্টার',
      time: '',
    },
  ],
  'নিউরোমেডিসিন': [
    {
      name: 'ডা. অনামিকা মারজিয়া মৌসুমী',
      description: 'এমবিবিএস (ঢাকা), বিসিএস (স্বাস্থ্য)\nপিজিটি (মেডিসিন)\nএফসিপিএস (নিউরোমেডিসিন, এফপি)\nন্যাশনাল ইনস্টিটিউট অব নিউরোসায়েন্সেস ও হাসপাতাল\nকনসালটেন্ট, আশ্-শাফি মেডিকেল সেন্টার',
      time: '',
    },
  ],
 
  
};

const PATHOLOGICAL_TESTS = [
  { name: "TC, DC, HB% ESR, SGPT / Alkaline Phosphatase / Urine", price: "400" },
  { name: "Calcium Urinary (Potassium, Sodium, Chloride) / Bilirubin D/I", price: "450" },
  { name: "CEA / CA-19.9 / CA-125 / CA-15.3 / AFP / PSA / Free PSA / B-HCG", price: "1400" },
  { name: "LFT / Aldolase / FDP / MACR / Electrolytes", price: "1000" },
  { name: "BT / CT / Blood Group / HB% / ESR", price: "200" },
  { name: "Lipid Profile / Lactate / Lipase / CPK / Fluid for ADA", price: "1200" },
  { name: "Amylase / Magnesium / Ammonia / Lithium / STP AG / eGFR", price: "1200" },
  { name: "GFR / Aldolose / Osmolality / Copper / Ceruloplajmin", price: "1200" },
  { name: "Ferritin", price: "1300" },
  { name: "Anti HBs / HBeAg / HCV / HEV IgM / HAV IgM", price: "1400" },
  { name: "T3 / T4 / TSH / Bence-Jones Protein / P-Time", price: "800" },
  { name: "HbA1C / ACTH / Prolactin / Testosterone / Cortisol / Insulin", price: "1400/1200" },
  { name: "Vitamin-D / AMH / TRAb / Protein-C / Protein-S", price: "3500" },
  { name: "HB Electrophoresis / Protein Electrophoresis", price: "1600" },
  { name: "CBC / CE / Film / Creatinine / ESR", price: "400" },
  { name: "ICT for Dengue IgG & IgM / Dengue Ns1 Ag", price: "300" },
  { name: "Urine R/E / Stool OBT", price: "400" },
  { name: "Urine for Pregnancy / Platelets", price: "300" },
  { name: "FBS / ABF / RBS / PPBS / Blood Sugar", price: "200" },
  { name: "Allergy Profile / Gene Xpert (Mtb)", price: "6000" },
  { name: "COVID-19 Rapid Antigen", price: "500" },
  { name: "COVID-19 RT-PCR", price: "3500" },
  { name: "HCV RNA (Quantitative)", price: "12000" },
  { name: "FNAC", price: "1200" },
];

export default function DoctorsPage() {
  const specialties = Object.keys(doctors);
  const [search, setSearch] = useState("");

  const filteredTests = useMemo(() => {
    return PATHOLOGICAL_TESTS.filter((test) => 
      test.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Contact Header */}
      <div className="sticky top-0 z-50 pt-1 pb-1 flex flex-col sm:flex-row items-center justify-center gap-2 bg-green-600 text-white px-4 shadow-md">
        <Image src="/Logo[2].png" alt="Ash Shafi Logo" width={50} height={50} className="w-10 h-10" />
        <span className="text-sm sm:text-base font-bold">সিরিয়াল দিতে কল করুন: </span>
        <div className="flex gap-4 text-sm sm:text-base font-mono">
          <a href="tel:+8801346694684" className="hover:underline">+8801346694684</a>
          <a href="tel:+8801992568186" className="hover:underline">+8801992568186</a>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Doctors Section */}
        <section className="mb-16">
          <h1 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-green-800">
            বিশেষজ্ঞ ডাক্তার এর তালিকা
          </h1>
          <Accordion type="single" collapsible className="w-full max-w-4xl mx-auto space-y-4">
            {specialties.map((specialty, index) => (
              <AccordionItem key={specialty} value={`item-${index}`} className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
                <AccordionTrigger className="px-6 py-4 hover:bg-green-50 text-left text-lg font-semibold">
                  {specialty}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <div className="grid gap-4 mt-4">
                    {doctors[specialty].map((doctor, dIndex) => (
                      <Card key={dIndex} className="border-l-4 border-green-500 shadow-none">
                        <CardContent className="p-4">
                          <h3 className="text-xl font-bold text-gray-900 mb-2">{doctor.name}</h3>
                          <p className="text-gray-600 whitespace-pre-line text-sm leading-relaxed">
                            {doctor.description}
                          </p>
                          {doctor.time && (
                            <div className="mt-3 text-green-700 font-bold text-xs bg-green-50 inline-block px-3 py-1 rounded-full">
                              🕒 সময়: {doctor.time}
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        {/* Pathological Test Section */}
        <section className="mb-16 max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            <div className="bg-green-700 p-6 text-white text-center">
              <h2 className="text-2xl font-bold">ল্যাব টেস্ট রেট চার্ট (Pathological Tests)</h2>
              <p className="text-green-100 text-sm mt-1">আশু-শাফি মেডিকেল সেন্টার</p>
            </div>
            
            <div className="p-6">
              <div className="relative mb-6">
                <input 
                  type="text" 
                  placeholder="টেস্টের নাম দিয়ে খুঁজুন..." 
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 outline-none transition-all"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <svg className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="border-b-2 border-gray-100">
                    <tr>
                      <th className="pb-4 font-bold text-gray-700">টেস্টের নাম (Test Name)</th>
                      <th className="pb-4 font-bold text-gray-700 text-right">ফি (Tk)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {filteredTests.map((test, i) => (
                      <tr key={i} className="hover:bg-green-50 transition-colors">
                        <td className="py-4 text-sm text-gray-600 pr-4">{test.name}</td>
                        <td className="py-4 text-sm font-bold text-green-600 text-right">৳{test.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {filteredTests.length === 0 && (
                  <p className="text-center py-10 text-gray-400 italic">দুঃখিত, কোনো টেস্ট পাওয়া যায়নি।</p>
                )}
              </div>
              
            </div>
          </div>
        </section>

        {/* Packages Section */}
        <section className="text-center">
          <h2 className="text-2xl font-bold mb-8 text-gray-800">আমাদের হেলথ প্যাকেজসমূহ</h2>
          <div className="inline-block bg-white p-2 rounded-2xl shadow-lg">
            <Image
              src="/packages.png"
              alt="Packages"
              width={800}
              height={500}
              className="rounded-xl w-full max-w-3xl h-auto"
            />
          </div>
        </section>
      </div>
    </div>
  );
}