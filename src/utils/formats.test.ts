import { formatDate } from './formats';

describe('formats', () => {
  describe('formatDate', () => {
    test('should format a valid timestamp correctly', () => {
      const timestamp = '2024-03-15T10:30:00.500Z';
      const formattedDate = formatDate(timestamp);
      expect(formattedDate).toBe('15 Mar 2024, 06:30 pm');
    });

    test('should format a midnight timestamp correctly', () => {
      const timestamp = '2024-03-15T16:00:00Z';
      const formattedDate = formatDate(timestamp);
      expect(formattedDate).toBe('16 Mar 2024, 12:00 am');
    });

    test('should format a noon timestamp correctly', () => {
      const timestamp = '2024-03-15T04:00:00Z';
      const formattedDate = formatDate(timestamp);
      expect(formattedDate).toBe('15 Mar 2024, 12:00 pm');
    });

    test('should throw error for invalid timestamp formats', () => {
      const timestamp = 'Invalid timestamp';
      expect(() => formatDate(timestamp)).toThrow();
    });

    test('should throw error if the timestamp is an empty string', () => {
      const timestamp = '';
      expect(() => formatDate(timestamp)).toThrow();
    });
  });
});
