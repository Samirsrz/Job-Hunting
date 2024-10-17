import { render, screen } from '@testing-library/react';
import { useGetFeaturedJobsQuery } from '../../../RTK/Api/FeaturedJobsApi/FeaturedJobsApi';
import FeaturedCompanies from './FeaturedCompanies';

// Mock the API call
jest.mock('../../../RTK/Api/FeaturedJobsApi/FeaturedJobsApi', () => ({
  useGetFeaturedJobsQuery: jest.fn(),
}));

describe('FeaturedCompanies Component', () => {
  test('renders loading spinner when fetching jobs', () => {
    // Mock API is loading
    useGetFeaturedJobsQuery.mockReturnValue({ isLoading: true });

    render(<FeaturedCompanies />);
    expect(screen.getByLabelText(/blocks-loading/i)).toBeInTheDocument();
  });

  test('renders featured jobs when API call is successful', () => {
    const jobs = [{ id: 1, title: 'Software Engineer' }];
    useGetFeaturedJobsQuery.mockReturnValue({ data: jobs, isLoading: false });

    render(<FeaturedCompanies />);
    expect(screen.getByText(/Software Engineer/i)).toBeInTheDocument();
  });

  test('renders no jobs message when API returns empty array', () => {
    useGetFeaturedJobsQuery.mockReturnValue({ data: [], isLoading: false });

    render(<FeaturedCompanies />);
    expect(screen.getByLabelText(/no-jobs-message/i)).toBeInTheDocument();
  });

  test('renders error message when API call fails', () => {
    useGetFeaturedJobsQuery.mockReturnValue({ isError: true, isLoading: false });

    render(<FeaturedCompanies />);
    expect(screen.getByLabelText(/error-message/i)).toBeInTheDocument();
  });
});
