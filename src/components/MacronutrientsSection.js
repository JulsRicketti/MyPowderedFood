import React, { useState } from 'react'
import { Form, Input, Divider } from 'antd'

export default function MacronutrientsSection () {
  const [fats, setFats] = useState({})
  const [carbohydrates, setCarbohydrates] = useState({})
  const [protein, setProtein] = useState('')
  const [fibre, setFibre] = useState('')
  const [sodium, setSodium] = useState('')

  return (
    <div>
      <h3>Section 2- Macronutrients</h3>
      <Form>
        <h4>Fats</h4>
        <Form.Item label='Total(g)' className='form-item'>
          <Input
            value={fats.total || ''}
            onChange={(evt) => setFats({ ...fats, total: evt.target.value })}
          />
        </Form.Item>
        <Form.Item label='Saturated(g)' className='form-item'>
          <Input
            value={fats.saturated || ''}
            onChange={(evt) => setFats({ ...fats, saturated: evt.target.value })}
          />
        </Form.Item>
        <Form.Item label='Trans (g)' className='form-item'>
          <Input
            value={fats.trans || ''}
            onChange={(evt) => setFats({ ...fats, trans: evt.target.value })}
          />
        </Form.Item>
        <Form.Item label='Polysaturated (g)' className='form-item'>
          <Input
            value={fats.polysaturated || ''}
            onChange={(evt) => setFats({ ...fats, polysaturated: evt.target.value })}
          />
        </Form.Item>
        <Divider/>
        <h4>Carbohydrates</h4>
        <Form.Item label='Total(g)' className='form-item'>
          <Input
            value={carbohydrates.total || ''}
            onChange={(evt) => setCarbohydrates({ ...carbohydrates, total: evt.target.value })}
          />
        </Form.Item>
        <Form.Item label='Sugars (g)' className='form-item'>
          <Input
            value={carbohydrates.sugars || ''}
            onChange={(evt) => setCarbohydrates({ ...carbohydrates, sugars: evt.target.value })}
          />
        </Form.Item>
        <Divider/>
        <h4>Protein</h4>
        <Form.Item label='Total (g)' className='form-item'>
          <Input
            value={protein || ''}
            onChange={(evt) => setProtein(evt.target.value)}
          />
        </Form.Item>
        <Divider/>
        <h4>Fibre</h4>
        <Form.Item label='Total (g)' className='form-item'>
          <Input
            value={fibre || ''}
            onChange={(evt) => setFibre(evt.target.value)}
          />
        </Form.Item>
        <h4>Sodium</h4>
        <Form.Item label='Total (g)' className='form-item'>
          <Input
            value={sodium || ''}
            onChange={(evt) => setSodium(evt.target.value)}

          />
        </Form.Item>
      </Form>
    </div>
  )
}
