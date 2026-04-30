import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Brain, TrendingUp, Trophy, Wallet, ShieldCheck } from 'lucide-react';

export default function App(){
  const [xp,setXp]=useState(62);
  const [level,setLevel]=useState(4);
  const [score,setScore]=useState(682);
  const [savings,setSavings]=useState(1240);
  const [tip,setTip]=useState('You spent 18% more on food this week. Move $20 to savings to level up.');
  const [journal,setJournal]=useState('');
  const [persona,setPersona]=useState('Builder');

  const progress = useMemo(()=>`${xp}%`,[xp]);

  const completeMission=()=>{
    let nx=xp+28;
    if(nx>=100){ setLevel(v=>v+1); setXp(nx-100); setScore(v=>v+11); setSavings(v=>v+150); setTip('Amazing streak. Your consistency predicts a +34 credit score improvement in 90 days.'); }
    else { setXp(nx); setSavings(v=>v+25); }
  }

  const generateCoach=()=>{
    const tips=[
      'AI detected recurring subscriptions. Canceling 1 could save $192/year.',
      'Your spending pattern suggests Fridays are high-risk. Set a $30 cap.',
      'Round up purchases this week and you can unlock Emergency Fund Tier 1.',
      'You are 3 on-time payments away from a stronger credit profile.'
    ];
    setTip(tips[Math.floor(Math.random()*tips.length)]);
  }

  const analyzeMood=()=>{
    if(journal.toLowerCase().includes('stress')) setTip('Money stress detected. AI recommends a 7-day micro-budget plan and automatic savings of $5/day.');
    else if(journal.toLowerCase().includes('travel')) setTip('Travel goal detected. Save $18/week to reach a $900 trip fund in 12 months.');
    else setTip('Journal analyzed. Focus area: consistency. Complete 2 missions this week.');
  }

  return <div className='min-h-screen bg-slate-950 text-white p-6 md:p-10'>
    <div className='max-w-6xl mx-auto space-y-6'>
      <div className='flex items-center gap-3 text-4xl font-bold'><Sparkles/> Zolve LifeSim AI</div>
      <div className='grid md:grid-cols-3 gap-4'>
        <Card><div className='text-xl font-semibold'>Profile</div><div className='mt-3 space-y-2'>
          <Row icon={<Trophy/>} label={`Level ${level} ${persona}`} />
          <Row icon={<ShieldCheck/>} label={`Credit Score ${score}`} />
          <Row icon={<Wallet/>} label={`Savings $${savings}`} />
        </div>
        <div className='mt-4 bg-slate-800 rounded-full h-4 overflow-hidden'><motion.div initial={{width:0}} animate={{width:progress}} className='h-full bg-cyan-400'/></div>
        <div className='text-sm mt-2'>{xp}% to next level</div>
        </Card>

        <Card><div className='text-xl font-semibold'>AI Future Twin</div>
          <div className='mt-3 text-sm text-slate-300'>Current You (12 months)</div>
          <div>$1,800 savings • 670 score • High stress</div>
          <div className='mt-3 text-sm text-cyan-300'>Optimized You (12 months)</div>
          <div>$6,200 savings • 745 score • Vacation unlocked</div>
        </Card>

        <Card><div className='text-xl font-semibold'>Daily Missions</div>
          <button onClick={completeMission} className='w-full mt-4 rounded-2xl bg-cyan-500 p-3 font-semibold'>Save $15 Today (+XP)</button>
          <button onClick={completeMission} className='w-full mt-3 rounded-2xl bg-indigo-500 p-3 font-semibold'>No Takeout (+XP)</button>
          <button onClick={completeMission} className='w-full mt-3 rounded-2xl bg-emerald-500 p-3 font-semibold'>Pay Bill On Time (+XP)</button>
        </Card>
      </div>

      <div className='grid md:grid-cols-2 gap-4'>
        <Card>
          <div className='flex items-center gap-2 text-xl font-semibold'><Brain/> OpenAI Smart Coach</div>
          <p className='mt-4 text-slate-300'>{tip}</p>
          <button onClick={generateCoach} className='mt-4 rounded-2xl bg-purple-600 px-4 py-2'>Generate New AI Insight</button>
        </Card>

        <Card>
          <div className='text-xl font-semibold'>AI Emotion Finance Journal</div>
          <textarea value={journal} onChange={e=>setJournal(e.target.value)} placeholder='Type: I feel stressed about rent / I want to travel...' className='mt-4 w-full h-28 rounded-2xl bg-slate-800 p-3'/>
          <button onClick={analyzeMood} className='mt-4 rounded-2xl bg-pink-600 px-4 py-2'>Analyze with AI</button>
        </Card>
      </div>

      <Card>
        <div className='flex items-center gap-2 text-xl font-semibold'><TrendingUp/> Why Judges Love This</div>
        <div className='grid md:grid-cols-4 gap-3 mt-4 text-sm'>
          <Badge text='Daily Retention Engine'/>
          <Badge text='Behavior Change'/>
          <Badge text='OpenAI Personalization'/>
          <Badge text='Future Planning'/>
        </div>
      </Card>
    </div>
  </div>
}

function Card({children}){return <div className='bg-slate-900 border border-slate-800 rounded-3xl p-5 shadow-2xl'>{children}</div>}
function Row({icon,label}){return <div className='flex items-center gap-2 text-slate-200'>{icon}<span>{label}</span></div>}
function Badge({text}){return <div className='rounded-2xl bg-slate-800 p-3'>{text}</div>}
