import { renderHook, act } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { useRegister } from '../../src/hooks/useRegister';
import axios from 'axios';

vi.mock('axios');

describe('useRegister Hook', () => {
    it('registra al usuario correctamente', async () => {
        // TODO 8
    });

    it('muestra un error si el registro falla', async () => {
        // TODO 9
    });
});
