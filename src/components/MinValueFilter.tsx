import { Button, Form } from "react-bootstrap";
import "./MinValueFilter.css";

interface MinValueFilterProps {
  value: string;
  setValue: (value: string) => void;
  onSubmit: () => void;
}

// Фильтр плитки по минимальному значению ресурса
export const MinValueFilter = ({ value, setValue, onSubmit }: MinValueFilterProps) => (
  <Form
    className="minValueFilter"
    onSubmit={(event) => {
      event.preventDefault();
      onSubmit();
    }}
  >
    <Form.Label className="minValueFilterLabel" htmlFor="min_value">
      Минимальное значение от
    </Form.Label>
    <Form.Control
      id="min_value"
      type="number"
      step="0.1"
      min="0"
      placeholder="все"
      value={value}
      onChange={(event) => setValue(event.target.value)}
    />
    <Button type="submit" className="greenhouseButton">
      Найти
    </Button>
  </Form>
);
