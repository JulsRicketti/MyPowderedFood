import React from 'react'
import PropTypes from 'prop-types'
import { Form, Input, Divider } from 'antd'

export default function MacronutrientsSection ({
  fats, setFats,
  carbohydrates, setCarbohydrates,
  protein, setProtein,
  fibre, setFibre,
  sodium, setSodium
}) {
  // const [fats, setFats] = useState({})
  // const [carbohydrates, setCarbohydrates] = useState({})
  // const [protein, setProtein] = useState('')
  // const [fibre, setFibre] = useState('')
  // const [sodium, setSodium] = useState('')

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

MacronutrientsSection.propTypes = {
  fats: PropTypes.shape({
    total: PropTypes.number,
    saturated: PropTypes.number,
    trans: PropTypes.number,
    polysaturated: PropTypes.number,
  }),
  setFats: PropTypes.func.isRequired,
  carbohydrates: PropTypes.shape({
    total: PropTypes.number,
    sugars: PropTypes.number,
  }),
  setCarbohydrates: PropTypes.func.isRequired,
  protein: PropTypes.number,
  setProtein: PropTypes.func.isRequired,
  fibre: PropTypes.number,
  setFibre: PropTypes.func.isRequired,
  sodium: PropTypes.number,
  setSodium: PropTypes.number,
}
