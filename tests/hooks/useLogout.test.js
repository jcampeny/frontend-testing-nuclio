import {renderHook, act} from '@testing-library/react';
import {describe, it, expect, vi} from 'vitest';
import {useLogout} from '../../src/hooks/useLogout';
import axios from 'axios';

vi.mock('axios');

describe('useLogout Hook', () => {
    it('cierra la sesión correctamente', async () => {
        // TODO 07

        // Nada de ayuda en este!
    });
});
